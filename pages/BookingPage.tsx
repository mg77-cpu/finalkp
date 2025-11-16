import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Magnet from '../components/Magnet'
import GradientText from '../components/GradientText';
import 'react-datepicker/dist/react-datepicker.css'; // Import react-datepicker CSS
import DatePicker from 'react-datepicker'; // Import DatePicker component
import '../components/Button.css';
import { IconCalculator, IconReceipt, IconCreditCard, IconBanknote, IconBarChart } from '../components/Icons';
import Loader from '../components/Loader';

const BookingPage: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Change to Date | null
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [modalOpacity, setModalOpacity] = useState<string>('opacity-0');
  const [modalScale, setModalScale] = useState<string>('scale-95');

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setModalOpacity('opacity-100');
        setModalScale('scale-100');
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setModalOpacity('opacity-0');
      setModalScale('scale-95');
    }
  }, [showSuccessModal]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Your backend API URL

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/services`);
        setServices(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        toast.error('Failed to fetch services.');
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to top
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!selectedService) {
      toast.error('Please select a service.');
      setLoading(false);
      return;
    }

    if (!selectedDate) {
      toast.error('Please select a date.');
      setLoading(false);
      return;
    }

    if (!selectedTime) {
      toast.error('Please select a time.');
      setLoading(false);
      return;
    }

    try {
      const bookingData = {
        service: selectedService,
        date: selectedDate.toISOString().split('T')[0], // Format date for API
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Format time for API
        fullName,
        email,
        phoneNumber,
        message,
      };
      await axios.post(`${API_BASE_URL}/appointments`, bookingData);
      // toast.success('Appointment booked successfully!'); // Replace with modal
      setShowSuccessModal(true);
      // Optionally reset form fields
      setSelectedService('');
      setSelectedDate(null);
      setSelectedTime(null);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to book appointment.';
      if (errorMessage.includes('admin email')) {
        toast.error('Booking successful, but failed to send confirmation to admin. Please try again or contact support.');
      } else if (errorMessage.includes('user email')) {
        toast.error('Booking successful, but failed to send confirmation to your email. Please check your internet connection or try again.');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-semibold tracking-tight mb-12 mt-8 text-gray-900">
      
         <GradientText
                  colors={["#000000", "#d4d4d4ff", "#000000"]}
                  animationSpeed={5}
                  showBorder={false}
                >
                  
                   Book an Appointment
                </GradientText>
      </h1>

      {loading && <Loader />}
      {/* {error && <p className="text-red-600 mb-4">Error: {error}</p>}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {success}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.15a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.03a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      )} */}

      {/* Service Selection */}
      <section className="mb-10 p-6  rounded-lg bg-white">
        <h2 className="text-2xl  tracking-tight mb-5 text-gray-800"> Select a Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-5 rounded-lg shadow-2xl cursor-pointer transition-all duration-200 flex items-center justify-between
                ${selectedService === service.name ? 'border-green-500 ring-0.5 ring-green-500 bg-green-50 shake-subtle' : 'border-gray-300 hover:border-gray-400 bg-gray-50'}`}
              onClick={() => setSelectedService(service.name)}
            >
              <p className="font-medium text-gray-800">{service.name}</p>
              {
                (() => {
                  switch (service.name) {
                    case 'Accounting':
                      return <IconCalculator strokeWidth={1.5} className="w-5 h-5 text-gray-600" />;
                    case 'Tax Preparation':
                      return <IconReceipt strokeWidth={1.5} className="w-5 h-5 text-gray-600" />;
                    case 'Payroll':
                      return <IconCreditCard strokeWidth={1.5} className="w-5 h-5 text-gray-600" />;
                    case 'Financial Consulting':
                      return <IconBarChart strokeWidth={1.5} className="w-5 h-5 text-gray-600" />;
                    default:
                      return <IconBanknote strokeWidth={1.5} className="w-5 h-5 text-gray-600" />;
                  }
                })()
              }
            </div>
          ))}
        </div>
      </section>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Date and Time Selection */}
        <section className="p-6 rounded-lg  bg-white">
          <h2 className="text-2xl tracking-tight mb-5 text-gray-800"> Select Date and Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${selectedDate ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                placeholderText="Select a date"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <DatePicker
                selected={selectedTime}
                onChange={(date: Date | null) => setSelectedTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${selectedTime ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                placeholderText="Select a time"
                required
              />
            </div>
          </div>
        </section>

        {/* Contact Information Form */}
        <section className="p-6  rounded-lg bg-white">
          <h2 className="text-2xl font-semibold tracking-tight mb-5 text-gray-800"> Your Contact Information</h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${fullName ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${email ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${phoneNumber ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${message ? 'react-datepicker-has-selection' : 'border-gray-300'}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Navigation and Action Buttons */}
        <section className="p-6 rounded-lg bg-white">
          <div className="flex flex-col sm:flex-row sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button type="button" className="flex-1 md:flex-none px-7 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-purple-200 hover:border-gray-400 hover:shadow-purple-200 transition-colors duration-200">Back</button>
            <Magnet
              padding={50}
              disabled={false}
              magnetStrength={10}
            >
              <button type="submit" className="w-full md:flex-none px-7 py-3 bg-green-500 text-white rounded-md shadow-sm hover:text-gray-600  transition-colors duration-200" disabled={loading}>
                {loading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </Magnet>
            
          </div>
        </section>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center transition-opacity duration-500 ease-out ${modalOpacity}`}>
          <div className={`bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto text-center transform transition-all duration-500 ease-out ${modalScale}`}>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h3>
            <p className="text-gray-700 mb-6">Your appointment has been successfully booked. Please check your email for confirmation details.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;