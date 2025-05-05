'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  const faqs = [
    {
      question: 'What types of design services do you offer?',
      answer: 'We specialize in web design/development, custom email templates, and technical design consultation. We create responsive, visually appealing designs that work across all devices and help elevate your brand presence while ensuring excellent user experience and conversion optimization.'
    },
    {
      question: 'How do your design packages work?',
      answer: 'We offer tiered design packages: Basic (€800-1500), Standard (€1500-3000), and Premium (€3000+) for websites. Email templates start at €150 for individual designs with packages available. Each tier includes different levels of customization, pages/templates, and additional services. We can provide a detailed breakdown based on your specific needs.'
    },
    {
      question: 'What is your design process like?',
      answer: 'Our design process includes: 1) Discovery & requirements gathering, 2) Concept & wireframing, 3) Visual design & feedback, 4) Development & implementation, and 5) Testing & launch. We maintain clear communication throughout and include multiple revision opportunities to ensure your complete satisfaction.'
    },
    {
      question: 'How do you handle design revisions?',
      answer: 'We include 2-3 rounds of revisions in our standard packages, allowing you to provide feedback at key stages of the design process. We believe in collaborative design and work closely with you to ensure the final product perfectly matches your vision and business needs.'
    },
    {
      question: 'Do you provide design assets ownership?',
      answer: 'Yes, upon final payment, you receive full ownership of all design assets created specifically for your project. We provide source files for your designs, allowing you or your team to make future modifications if needed.'
    },
    {
      question: 'Do you offer maintenance and updates for designs?',
      answer: 'We offer ongoing support and maintenance packages for all completed design projects. This includes regular updates, content changes, and technical maintenance to keep your website or email templates functioning optimally and securely.'
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">Let's Create Something Amazing</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            Ready to elevate your brand with stunning design? Contact us to discuss your web design or 
            email template needs. Our team is here to bring your vision to life with creative, 
            functional designs that convert.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Section */}
      <section className="mb-16 md:mb-20">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <ScrollReveal direction="left">
            <ContactForm />
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <ContactInfo />
              
              {/* Consultation Booking */}
              <div className="rounded-lg bg-gradient-to-br from-midnight-800/90 to-midnight-700/90 p-6 shadow-xl backdrop-blur-sm border border-midnight-600">
                <h3 className="mb-4 text-xl font-bold text-white">Book a Design Consultation</h3>
                <p className="mb-4 text-gray-300">
                  Schedule a free 30-minute consultation with our design team to discuss your project needs and explore how we can help.
                </p>
                <a 
                  href="https://calendly.com/gendev-design/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-cyber-yellow-500 px-4 py-2 text-black font-medium transition-all hover:bg-cyber-yellow-400 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Now
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">
              Have some questions about working with us? Here are answers to some common queries.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-midnight-800/50 p-5 md:p-6 backdrop-blur-sm border border-midnight-600 hover:border-cyber-yellow-500/30 transition-colors">
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
