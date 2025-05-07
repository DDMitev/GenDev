'use client';

import { useState } from 'react';
import CustomDropdown from '@/components/ui/CustomDropdown';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Design',
    budget: '',
    timeline: '',
    inspirationLinks: '',
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

  const handleDropdownChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Make a real API call to our contact endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSubmitStatus({
        type: 'success',
        message: data.message || 'Thank you for your message! We\'ll get back to you within 1 business day.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        projectType: 'Web Design',
        budget: '',
        timeline: '',
        inspirationLinks: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5 md:space-y-6">
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 md:mb-2 block text-sm font-medium text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-midnight-600 bg-midnight-800/50 p-2.5 md:p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyber-yellow-500 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 md:mb-2 block text-sm font-medium text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-midnight-600 bg-midnight-800/50 p-2.5 md:p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyber-yellow-500 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <CustomDropdown
          id="projectType"
          name="projectType"
          label="Project Type"
          value={formData.projectType}
          onChange={(value) => handleDropdownChange('projectType', value)}
          required
          options={[
            { value: 'Web Design', label: 'Web Design & Development' },
            { value: 'Email Templates', label: 'Custom Email Templates' },
            { value: 'Technical Consultation', label: 'Design Technical Consultation' },
            { value: 'Other', label: 'Other (Please specify in message)' }
          ]}
        />
      </div>
      
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <div>
          <CustomDropdown
            id="budget"
            name="budget"
            label="Budget Range"
            value={formData.budget}
            onChange={(value) => handleDropdownChange('budget', value)}
            placeholder="Select budget range"
            options={[
              { value: 'Email Templates (€150-500)', label: 'Email Templates (€150-500)' },
              { value: 'Web Design (€800-3,000)', label: 'Web Design (€800-3,000)' },
              { value: 'Technical Consultation (€300-1,000)', label: 'Technical Consultation (€300-1,000)' },
              { value: 'Custom Project (€3,000+)', label: 'Custom Project (€3,000+)' },
              { value: 'Not sure yet', label: 'Not sure yet' }
            ]}
          />
        </div>
        <div>
          <CustomDropdown
            id="timeline"
            name="timeline"
            label="Timeline Expectations"
            value={formData.timeline}
            onChange={(value) => handleDropdownChange('timeline', value)}
            placeholder="Select timeline"
            options={[
              { value: 'ASAP (1-2 weeks)', label: 'ASAP (1-2 weeks)' },
              { value: 'Soon (2-4 weeks)', label: 'Soon (2-4 weeks)' },
              { value: 'This quarter', label: 'This quarter' },
              { value: 'No rush', label: 'No rush' },
              { value: 'Not sure yet', label: 'Not sure yet' }
            ]}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="inspirationLinks" className="mb-1.5 md:mb-2 block text-sm font-medium text-white">
          Design Inspiration Links <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          id="inspirationLinks"
          name="inspirationLinks"
          value={formData.inspirationLinks}
          onChange={handleChange}
          className="w-full rounded-lg border border-midnight-600 bg-midnight-800/50 p-2.5 md:p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyber-yellow-500 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30"
          placeholder="URLs to designs you like (separate multiple links with commas)"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="mb-1.5 md:mb-2 block text-sm font-medium text-white">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-lg border border-midnight-600 bg-midnight-800/50 p-2.5 md:p-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-cyber-yellow-500 focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        ></textarea>
      </div>
      
      {submitStatus.type && (
        <div className={`rounded-lg p-3 md:p-4 ${
          submitStatus.type === 'success' 
            ? 'bg-black/60 text-cyber-yellow-400 border border-cyber-yellow-500/30' 
            : 'bg-black/60 text-cyber-yellow-400 border border-cyber-yellow-500/30'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-cyber-yellow-500 px-5 py-2.5 md:px-6 md:py-3 text-base font-medium text-black shadow-lg transition-all duration-300 hover:bg-cyber-yellow-400 hover:shadow-cyber-yellow-500/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/30 focus:ring-offset-2 focus:ring-offset-midnight-900 disabled:opacity-70 disabled:cursor-not-allowed"
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
