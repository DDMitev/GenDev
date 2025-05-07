'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { ChevronDown, Code2, Package, CreditCard, Workflow, FileEdit, FileCheck, Settings } from 'lucide-react';

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // Start with first FAQ open

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of design services do you offer?',
      answer: 'We specialize in web design/development, custom email templates, and technical design consultation. We create responsive, visually appealing designs that work across all devices and help elevate your brand presence while ensuring excellent user experience and conversion optimization.',
      icon: <Code2 className="h-6 w-6 text-cyber-yellow-500" />,
      categories: ['Web Design', 'Email Templates', 'Technical Consultation']
    },
    {
      question: 'How do your design packages work?',
      answer: 'We offer tiered design packages: Basic (€800-1500), Standard (€1500-3000), and Premium (€3000+) for websites. Email templates start at €150 for individual designs with packages available. Each tier includes different levels of customization, pages/templates, and additional services. We can provide a detailed breakdown based on your specific needs.',
      icon: <Package className="h-6 w-6 text-cyber-yellow-500" />,
      pricing: [
        { tier: 'Basic', range: '€800-1500' },
        { tier: 'Standard', range: '€1500-3000' },
        { tier: 'Premium', range: '€3000+' }
      ]
    },
    {
      question: 'What is your design process like?',
      answer: 'Our design process includes: 1) Discovery & requirements gathering, 2) Concept & wireframing, 3) Visual design & feedback, 4) Development & implementation, and 5) Testing & launch. We maintain clear communication throughout and include multiple revision opportunities to ensure your complete satisfaction.',
      icon: <Workflow className="h-6 w-6 text-cyber-yellow-500" />,
      steps: [
        'Discovery & requirements gathering',
        'Concept & wireframing',
        'Visual design & feedback',
        'Development & implementation',
        'Testing & launch'
      ]
    },
    {
      question: 'How do you handle design revisions?',
      answer: 'We include 2-3 rounds of revisions in our standard packages, allowing you to provide feedback at key stages of the design process. We believe in collaborative design and work closely with you to ensure the final product perfectly matches your vision and business needs.',
      icon: <FileEdit className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      question: 'Do you provide design assets ownership?',
      answer: 'Yes, upon final payment, you receive full ownership of all design assets created specifically for your project. We provide source files for your designs, allowing you or your team to make future modifications if needed.',
      icon: <FileCheck className="h-6 w-6 text-cyber-yellow-500" />
    },
    {
      question: 'Do you offer maintenance and updates for designs?',
      answer: 'We offer ongoing support and maintenance packages for all completed design projects. This includes regular updates, content changes, and technical maintenance to keep your website or email templates functioning optimally and securely.',
      icon: <Settings className="h-6 w-6 text-cyber-yellow-500" />
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
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index 
                    ? 'border-cyber-yellow-500 shadow-md shadow-cyber-yellow-500/10 bg-gradient-to-br from-midnight-800 to-midnight-900' 
                    : 'bg-midnight-800/50 border-midnight-600 hover:border-cyber-yellow-500/30'
                } p-5 md:p-6 backdrop-blur-sm border`}
              >
                <button 
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-cyber-yellow-500/50 focus:ring-opacity-50 rounded-md"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <div className={`transition-all duration-300 ${openFaqIndex === index ? 'text-cyber-yellow-500 scale-110' : 'text-gray-400'}`}>
                      {faq.icon}
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${openFaqIndex === index ? 'text-cyber-yellow-500' : 'text-white'}`}>{faq.question}</h3>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-cyber-yellow-500 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaqIndex === index && (
                  <div 
                    className="mt-4 text-gray-300 space-y-4 overflow-hidden transition-all duration-300"
                    style={{ 
                      animation: 'fadeInDown 0.3s ease-out forwards',
                      maxHeight: '1000px', // Set a reasonable max height
                      opacity: 1,
                    }}
                  >
                    <p className="leading-relaxed">{faq.answer}</p>
                    
                    {/* Service Categories */}
                    {faq.categories && (
                      <div className="pt-3 border-t border-midnight-600">
                        <h4 className="text-sm font-semibold text-cyber-yellow-400 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {faq.categories.map((category, idx) => (
                            <span key={idx} className="bg-midnight-700/50 py-1 px-3 rounded-full text-gray-300 text-xs flex items-center">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Pricing Tiers */}
                    {faq.pricing && (
                      <div className="pt-3 border-t border-midnight-600">
                        <h4 className="text-sm font-semibold text-cyber-yellow-400 mb-2">Pricing Tiers</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {faq.pricing.map((price, idx) => (
                            <div key={idx} className="bg-midnight-700/70 p-2 rounded-md text-center">
                              <div className="text-white text-xs font-semibold">{price.tier}</div>
                              <div className="text-cyber-yellow-500 text-xs">{price.range}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Process Steps */}
                    {faq.steps && (
                      <div className="pt-3 border-t border-midnight-600">
                        <h4 className="text-sm font-semibold text-cyber-yellow-400 mb-2">Design Process</h4>
                        <ol className="space-y-2">
                          {faq.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-cyber-yellow-500 text-black text-xs font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
