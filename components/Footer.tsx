import React from 'react';
import './Footer.css';

const Footer = () => {
  const certifications = [
    "Registered Tax Accountant",
    "Public Accountants and Auditors Board Registered Member",
    "Chartered Governance and Accounting Professional"
  ];

  const contactInfo = {
    email: "mufukaw@gmail.com",
    phone: "+263 773 502 526",
    address: ["No 6131 Mugodo Drive", "Marondera, Zimbabwe"]
  };

  const socialPlatforms = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

  // Icon components
  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const SocialIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
    </svg>
  );

  return (
    <footer id="contact" className="accounting-footer">
      <div className="footer-container">
        <div className="footer-column certifications-column">
          <h3 className="column-heading">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((certification, index) => (
              <div key={index} className="certification-item">
                {certification}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-column contact-column">
          <h3 className="column-heading">Contact Info</h3>
          <div className="contact-list">
            <div className="contact-item">
              <EmailIcon />
              <span className="contact-text">{contactInfo.email}</span>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <span className="contact-text">{contactInfo.phone}</span>
            </div>
            <div className="contact-item">
              <LocationIcon />
              <div className="address-text">
                {contactInfo.address.map((line, index) => (
                  <span key={index} className="address-line">{line}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-column social-column">
          <h3 className="column-heading">Follow Us</h3>
          <div className="social-links">
            {socialPlatforms.map((platform, index) => (
              <a key={index} href="#" className="social-link">
                <SocialIcon />
                <span className="social-text">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} KP Accounting & Tax Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
