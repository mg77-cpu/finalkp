require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://accountingkp.vercel.app'
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Booking Schema and Model
const bookingSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
    enum: [
      'Accounting',
      'Taxation',
      'Business Advisory',
      'Compliance',
    ]
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

// API Endpoints

// Placeholder for services
const services = [
  { id: '1', name: 'Accounting' },
  { id: '2', name: 'Taxation' },
  { id: '3', name: 'Business Advisory' },
  { id: '4', name: 'Compliance' },
];

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, // Shows SMTP traffic and messages
  logger: true // Logs to the console
});

// Verify Nodemailer transporter
transporter.verify(function (error, success) {
  if (error) {
    console.error("Nodemailer transporter verification failed:", error);
    console.error("Verification error details:", error.message);
  } else {
    console.log("Nodemailer transporter is ready to send emails");
    console.log("Verification success details:", success);
  }
});

// API Endpoints
app.get('/api/services', (req, res) => {
  res.json(services);
});

// GET /api/appointments/available-slots - To fetch available time slots for a specific service on a given date.
// This is a placeholder and would require more complex logic for real-world availability.
app.get('/api/appointments/available-slots', (req, res) => {
  const { serviceId, date } = req.query;
  // In a real application, you'd query your database for actual available slots
  // For now, we'll return some dummy data
  const dummySlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"];
  res.json(dummySlots);
});

// POST /api/appointments - To create a new appointment booking.
// POST /api/appointments - To create a new appointment booking.
app.post('/api/appointments', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    const { service, date, time, fullName, email, phoneNumber, message } = req.body;

    // Send email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Appointment Booking',
      html: `
        <p>A new appointment has been booked:</p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Message:</strong> ${message || 'N/A'}</li>
        </ul>
      `,
    };

    console.log('Attempting to send email to admin...');
    
    // FIX: Use async/await instead of callback
    try {
      const adminInfo = await transporter.sendMail(mailOptions);
      console.log('Email sent to admin successfully:', adminInfo.messageId);
      console.log('Admin email response:', adminInfo.response);
    } catch (emailError) {
      console.error('Error sending email to admin:', emailError);
      // Don't throw here - we still want to try sending the user email
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #f8f8f8; padding: 20px; text-align: center;">
            <h1 style="color: #333;">Appointment Confirmation</h1>
          </div>
          <div style="padding: 20px; color: #555;">
            <p>Dear ${fullName},</p>
            <p>Your appointment has been successfully booked with the following details:</p>
            <ul style="list-style-type: none; padding: 0;">
              <li style="margin-bottom: 8px;"><strong>Service:</strong> ${service}</li>
              <li style="margin-bottom: 8px;"><strong>Date:</strong> ${date}</li>
              <li style="margin-bottom: 8px;"><strong>Time:</strong> ${time}</li>
              <li style="margin-bottom: 8px;"><strong>Name:</strong> ${fullName}</li>
              <li style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</li>
              <li style="margin-bottom: 8px;"><strong>Phone:</strong> ${phoneNumber}</li>
              <li style="margin-bottom: 8px;"><strong>Message:</strong> ${message || 'N/A'}</li>
            </ul>
            <p>We look forward to seeing you!</p>
            <p>Best regards,<br>KP Accounting & Tax Services</p>
          </div>
          <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            <p>&copy; ${new Date().getFullYear()} KP Accounting & Tax Services. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    console.log('Attempting to send confirmation email to user...');
    
    // FIX: Use async/await instead of callback
    try {
      const userInfo = await transporter.sendMail(userMailOptions);
      console.log('Confirmation email sent to user successfully:', userInfo.messageId);
      console.log('User email response:', userInfo.response);
    } catch (emailError) {
      console.error('Error sending confirmation email to user:', emailError);
      // Don't throw here - we still want to return the booking success
    }

    res.status(201).json({
      success: true,
      booking: newBooking,
      message: 'Booking created successfully'
    });
    
  } catch (error) {
    console.error('Booking error:', error);
    res.status(400).json({ 
      success: false,
      message: error.message 
    });
  }
});