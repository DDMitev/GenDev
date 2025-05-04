'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send the form data to your backend or a form service
    // This is a simulation for demonstration purposes
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you within 1 business day.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-indigo-100">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-3 text-indigo-100 backdrop-blur-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-indigo-100">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-3 text-indigo-100 backdrop-blur-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-indigo-100">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-3 text-indigo-100 backdrop-blur-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
          placeholder="Project inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-indigo-100">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-3 text-indigo-100 backdrop-blur-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30"
          placeholder="Tell me about your project or inquiry..."
        ></textarea>
      </div>
      
      {submitStatus.type && (
        <div className={`rounded-lg p-4 ${
          submitStatus.type === 'success' 
            ? 'bg-green-900/30 text-green-200 border border-green-800/50' 
            : 'bg-red-900/30 text-red-200 border border-red-800/50'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-fuchsia-600/20 hover:translate-y-[-2px] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 h-5 w-5"
            >
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
