'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully! I will get back to you shortly.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert(`Failed to send the message. Please try again later. Error: ${error.text}`);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen px-4 sm:px-8">
      <main className="max-w-7xl mx-auto p-6 sm:p-8 pt-24 mt-20">
        {/* Header Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Me</h1>
          <p className="text-lg sm:text-xl text-gray-300 italic">
            I'd love to hear from you! Feel free to reach out with any questions or comments.
          </p>
        </section>

        {/* Form Section */}
        <section className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm sm:text-base mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm sm:text-base mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm sm:text-base mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-yellow-500"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
