import React, { useState } from "react";
import { sendEmail } from "../apiCall/api"; // ✅ Import backend API function for sending emails
import '../assets/styles/ComprehensiveIT.css'; // ✅ Import component-specific styles
import { Element } from "react-scroll"; // ✅ Enables smooth scrolling to the section

const ComprehensiveIT = () => {
  // 🔹 State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // 🔹 State to track form submission status

  // ✅ Handles input changes and updates state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handles form submission and sends data to the backend API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission
  
    try {
      const message = await sendEmail(formData); // Sends form data to the backend
      setSubmissionStatus(message); // Updates status message on success
    } catch (error) {
      setSubmissionStatus("Error sending email. Please try again."); // Updates status message on failure
    }

    // 🔹 Clears form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      <Element name="contacts"> {/* 🔹 Enables smooth scrolling to this section */}
        <div className="comprehensive-container"> {/* 🔹 Main container for layout */}

          {/* 🔹 Left Section - Displays Information */}
          <div className="left-section">
            <div className="header-section">
              <h1>Partner with Us for Comprehensive IT</h1>
            </div>
            <p className="description">
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>

            {/* 🔹 Benefits Section */}
            <div className="benefits-section">
              <h3>Your benefits:</h3>
              <ul className="benefits-list">
                <li>Client-oriented</li>
                <li>Results-driven</li>
                <li>Independent</li>
                <li>Problem-solving</li>
                <li>Competent</li>
                <li>Transparent</li>
              </ul>
            </div>
          </div>

          {/* 🔹 Right Section - Contact Form */}
          <div className="right-section">
            <h2>Schedule a Free Consultation</h2>
            <form className="consultation-form" onSubmit={handleSubmit}>
              
              {/* 🔹 First Name & Last Name */}
              <div className="form-group">
                <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
              </div>

              {/* 🔹 Company Name */}
              <div className="form-group">
                <input type="text" name="company" placeholder="Company / Organization" value={formData.company} onChange={handleChange} required />
              </div>

              {/* 🔹 Email Address */}
              <div className="form-group">
                <input type="email" name="email" placeholder="Company email" value={formData.email} onChange={handleChange} required />
              </div>

              {/* 🔹 Phone Number */}
              <div className="form-group">
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              </div>

              {/* 🔹 Service Selection Dropdown */}
              <div className="form-group">
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">How Can We Help You?</option>
                  <option value="IT Consulting and Advisory">IT Consulting and Advisory</option>
                  <option value="Managed Services">Managed Services</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Custom Solutions">Custom Solutions</option>
                </select>
              </div>

              {/* 🔹 Message Input Field */}
              <div className="form-group">
                <textarea name="message" placeholder="Describe how we can help..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              {/* 🔹 Submit Button */}
              <button type="submit" className="submit-button">Submit</button>

              {/* 🔹 Displays Submission Status Message */}
              {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
            </form>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default ComprehensiveIT;

/*State Management

Uses useState to track form fields (formData) and submission status (submissionStatus).
Handle Form Input Changes

handleChange dynamically updates form fields based on user input.
Form Submission Logic

handleSubmit prevents default form submission, sends form data to the backend via sendEmail, updates status, and clears the form.
UI Structure

Left Section: Displays service benefits.
Right Section: Contains a form for user input and submission.
Smooth Scrolling

Uses react-scroll to allow navigation to the contacts section. */