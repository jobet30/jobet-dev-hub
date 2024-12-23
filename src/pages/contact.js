import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h2>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            <p className="text-white">Thank you for your message! I will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-white">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-black"
                rows="4"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-3 mt-4 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/resume"
            className="inline-block bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
          >
            View My Resume
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
