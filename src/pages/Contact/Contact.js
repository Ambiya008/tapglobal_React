import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mapCenter = {
    lat: 29.7857, // Katy, TX coordinates
    lng: -95.8245
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
        toast.success('Message sent successfully!');
        formik.resetForm();
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
      }
      setIsSubmitting(false);
    }
  });

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-hero">
          <div className="container">
            <h1>Connect with Us</h1>
            <p>We help our clients renew their business</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <Phone className="contact-icon" />
                <h3>CALL 24/7</h3>
                <a href="tel:+18323125501">+1-832-312-5501</a>
              </div>

              <div className="contact-card">
                <Email className="contact-icon" />
                <h3>MORE INFO</h3>
                <a href="mailto:sangeeta@tapglobal.us">sangeeta@tapglobal.us</a>
              </div>

              <div className="contact-card">
                <LocationOn className="contact-icon" />
                <h3>Just Drop By</h3>
                <p>7106 Marble Springs Dr<br />Katy, Tx 77494</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="error-message">{formik.errors.name}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error-message">{formik.errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    {...formik.getFieldProps('subject')}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="error-message">{formik.errors.subject}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    {...formik.getFieldProps('message')}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="error-message">{formik.errors.message}</div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="map-section">
              <h2>Our Location</h2>
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerClassName="google-map"
                  center={mapCenter}
                  zoom={15}
                >
                  <Marker position={mapCenter} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  );
};

export default Contact;