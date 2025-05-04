'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  const faqs = [
    {
      question: 'What types of projects do you work with?',
      answer: 'We specialize in web application development, data management solutions, API integrations, and technical consulting. Our partnership is ideal for businesses looking to improve their digital presence, streamline operations through automation, or connect disparate systems. We work with projects of various sizes, but typically focus on engagements valued at €300 or more.'
    },
    {
      question: 'How do you handle pricing?',
      answer: 'We offer flexible pricing options based on project scope and requirements. For most services, we charge €30-50/hr or provide fixed project quotes for well-defined scopes. We believe in transparent pricing and will provide detailed estimates before any work begins.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, absolutely! Based in Sofia, Bulgaria, we serve clients both locally and internationally. We\'re well-equipped for remote collaboration with convenient time zone overlap with most of Europe and the ability to accommodate calls with clients in North America and Asia when needed.'
    },
    {
      question: 'What is your typical turnaround time?',
      answer: 'Turnaround time varies based on project complexity and scope. Small projects might take 1-2 weeks, while larger projects typically span 2-3 months. We pride ourselves on clear communication regarding timelines and will provide regular updates throughout the development process.'
    },
    {
      question: 'How do you handle revisions and feedback?',
      answer: 'Our collaborative approach includes regular check-ins and multiple opportunities for feedback. We typically include 2-3 rounds of revisions in our project quotes. Our goal is your complete satisfaction, so we\'ll work closely with you to ensure the final product meets your expectations.'
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we offer ongoing support and maintenance packages for all completed projects. We also provide detailed documentation and knowledge transfer to ensure you or your team can manage day-to-day operations confidently.'
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">Get in Touch</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            Have a project in mind or questions about our services? We'd love to hear from you. 
            Our team is ready to discuss how we can help bring your vision to life.
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
            <ContactInfo />
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
