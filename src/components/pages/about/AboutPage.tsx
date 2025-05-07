'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { 
  Code2, 
  Briefcase, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  Lightbulb,
  Database,
  Globe,
  Clock,
  CheckCircle2,
  Mail,
  Palette as PaletteIcon,
  Smartphone,
  Zap
} from 'lucide-react';

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
};

type TabType = 'partnership' | 'approach' | 'experience';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>('partnership');

  const skillGroups: SkillGroup[] = [
    {
      category: 'UI/UX Design',
      icon: <PaletteIcon className="h-5 w-5 text-cyber-yellow-500" />,
      skills: [
        { name: 'Web Design', level: 95 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Principles', level: 90 },
        { name: 'Design Systems', level: 85 },
      ],
    },
    {
      category: 'Development',
      icon: <Code2 className="h-5 w-5 text-cyber-yellow-500" />,
      skills: [
        { name: 'React & Next.js', level: 90 },
        { name: 'HTML/CSS/JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      category: 'Email Design',
      icon: <Mail className="h-5 w-5 text-cyber-yellow-500" />,
      skills: [
        { name: 'HTML Email', level: 90 },
        { name: 'Email Client Compatibility', level: 85 },
        { name: 'Responsive Email', level: 90 },
        { name: 'Campaign Design', level: 85 },
      ],
    },
    {
      category: 'Tools & Methods',
      icon: <Briefcase className="h-5 w-5 text-cyber-yellow-500" />,
      skills: [
        { name: 'Figma & Design Tools', level: 85 },
        { name: 'Version Control', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Testing', level: 80 },
      ],
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'partnership':
        return (
          <div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-cyber-yellow-500" />
                  <h3 className="text-2xl font-bold text-white">Our Partnership</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg bg-midnight-800/80 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-cyber-yellow-500" />
                    <p className="text-gray-300">
                      We combine <span className="text-white font-medium">design expertise</span> with <span className="text-white font-medium">technical implementation</span> to deliver solutions that help businesses create meaningful connections with their audience.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 rounded-lg bg-midnight-800/80 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <Globe className="mt-1 h-5 w-5 flex-shrink-0 text-cyber-yellow-500" />
                    <p className="text-gray-300">
                      Based in <span className="text-white font-medium">Sofia, Bulgaria</span>, we serve both local and international clients with a focus on quality and communication.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 rounded-lg bg-midnight-800/80 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-cyber-yellow-500" />
                    <p className="text-gray-300">
                      We prioritize <span className="text-white font-medium">design excellence</span>, <span className="text-white font-medium">clear communication</span>, and <span className="text-white font-medium">technical precision</span> in every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Team Member: Deyan */}
                <div className="group overflow-hidden rounded-lg bg-midnight-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/20 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-midnight-600/80 to-midnight-900/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-cyber-yellow-500">DM</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold text-white">Deyan Mitev</h3>
                  <p className="text-center text-sm font-medium text-gray-300">Technical Lead, GenDev</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>UI/UX Design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>Frontend Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>Design Implementation</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Member: Matey */}
                <div className="group overflow-hidden rounded-lg bg-midnight-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/20 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-midnight-600/80 to-midnight-900/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-cyber-yellow-500">MM</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold text-white">Matey Manasiev</h3>
                  <p className="text-center text-sm font-medium text-gray-300">Business & Content Lead</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>Client Relations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>Project Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-yellow-500" />
                      <span>Content Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'approach':
        return (
          <div>
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-midnight-800/60 p-5 backdrop-blur-sm ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500">
                  <PaletteIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">User-Centered Design</h3>
                <p className="text-sm text-gray-300">We design with your audience in mind, creating intuitive experiences that engage and convert visitors. Our design process begins with understanding user needs and business goals.</p>
              </div>
              
              <div className="rounded-lg bg-midnight-800/60 p-5 backdrop-blur-sm ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Responsive Design</h3>
                <p className="text-sm text-gray-300">Every design we create is fully responsive, ensuring your website or email looks perfect on every device. We thoroughly test on multiple screen sizes and platforms.</p>
              </div>
              
              <div className="rounded-lg bg-midnight-800/60 p-5 backdrop-blur-sm ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-midnight-700 to-black text-cyber-yellow-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Performance Focus</h3>
                <p className="text-sm text-gray-300">Beautiful design shouldn't sacrifice speed. We optimize every element to ensure quick loading times while maintaining visual appeal and functionality.</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-white">Our Design Process</h3>
              <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyber-yellow-500 before:via-cyber-yellow-600 before:to-cyber-yellow-400 md:ml-8">
                <div className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                    <span className="text-black font-bold">1</span>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="text-lg font-semibold text-white">Discovery & Research</div>
                    <p className="text-sm text-gray-300">We begin by understanding your brand, audience, and goals. Research into competitors and industry trends informs our approach.</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                    <span className="text-black font-bold">2</span>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="text-lg font-semibold text-white">Concept & Wireframing</div>
                    <p className="text-sm text-gray-300">We create initial concepts and wireframes to establish information architecture and core design elements before moving to detailed designs.</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                    <span className="text-black font-bold">3</span>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="text-lg font-semibold text-white">Visual Design</div>
                    <p className="text-sm text-gray-300">High-fidelity designs bring your project to life with attention to typography, color, imagery, and interactive elements.</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                    <span className="text-black font-bold">4</span>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="text-lg font-semibold text-white">Development & Implementation</div>
                    <p className="text-sm text-gray-300">We transform designs into code with meticulous attention to detail, ensuring your design is perfectly executed.</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                    <span className="text-black font-bold">5</span>
                  </div>
                  
                  <div className="ml-16 space-y-2">
                    <div className="text-lg font-semibold text-white">Testing & Refinement</div>
                    <p className="text-sm text-gray-300">Rigorous testing across devices and platforms ensures your design works flawlessly, with refinements made based on user feedback.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div 
                  key={group.category} 
                  className="overflow-hidden rounded-lg bg-midnight-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyber-yellow-500/20 ring-1 ring-midnight-600 hover:ring-cyber-yellow-500/30"
                >
                  <div className="mb-4 flex items-center gap-3">
                    {group.icon}
                    <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-xs font-medium text-cyber-yellow-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-midnight-900/70">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-cyber-yellow-500 to-cyber-yellow-600 transition-all duration-500" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        return (
          <div>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyber-yellow-500 before:via-cyber-yellow-600 before:to-cyber-yellow-400 md:ml-8">
              {/* Timeline Item 1 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                  <PaletteIcon className="h-5 w-5 text-black" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">Fashion Brand Portfolio</div>
                      <div className="text-sm text-gray-400">Mar 2025 - Apr 2025</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400 sm:mt-0">
                      Web Design & Development
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-midnight-800/60 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Minimalist product gallery with custom hover interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Animated transitions between product categories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Integrated lookbook with seasonal collections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">Email Campaign Templates</div>
                      <div className="text-sm text-gray-400">Jan 2025 - Feb 2025</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400 sm:mt-0">
                      Custom Email Templates
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-midnight-800/60 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Responsive email templates for product launches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Interactive elements with fallbacks for all email clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Custom designed newsletter system with analytics integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                  <Globe className="h-5 w-5 text-black" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">BuildHolding Redesign</div>
                      <div className="text-sm text-gray-400">Nov 2024 - Jan 2025</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400 sm:mt-0">
                      Complete Design Overhaul
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-midnight-800/60 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Modernized UI with custom project showcase gallery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Improved mobile experience with touch-optimized menus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Interactive location map with project filtering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                  <Lightbulb className="h-5 w-5 text-black" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">Design System Implementation</div>
                      <div className="text-sm text-gray-400">Sep 2024 - Oct 2024</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400 sm:mt-0">
                      Technical Consultation
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-midnight-800/60 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Created comprehensive component library with Figma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Developed technical documentation for design implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Trained client team on design system maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 5 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-cyber-yellow-500 to-cyber-yellow-600 flex items-center justify-center shadow-md">
                  <Smartphone className="h-5 w-5 text-black" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">UI/UX Design Portfolio</div>
                      <div className="text-sm text-gray-400">2023 - Present</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-cyber-yellow-500/10 px-3 py-1 text-xs font-medium text-cyber-yellow-400 sm:mt-0">
                      Ongoing Projects
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-midnight-800/60 p-4 backdrop-blur-sm ring-1 ring-midnight-600">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>User experience optimization for e-commerce sites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Mobile-first design approach for interactive applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-yellow-500" />
                        <span>Accessibility improvements across client platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <ScrollReveal>
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">About GenDev</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
            GenDev is a specialized web development and data management partnership founded by two 
            professionals passionate about creating digital solutions that drive business growth. 
            Our compact team size allows us to offer personalized service with direct access to the 
            founders throughout your project.
          </p>
        </div>
      </ScrollReveal>
      {/* Tabs */}
      <div className="mt-8 md:mt-10">
        <div className="flex flex-wrap justify-center gap-2 border-b border-midnight-600 pb-1">
          <button
            onClick={() => setActiveTab('partnership')}
            className={`flex items-center gap-2 rounded-t-lg px-4 py-2 md:px-6 md:py-3 text-sm font-medium transition-colors ${
              activeTab === 'partnership'
                ? 'bg-midnight-800 text-cyber-yellow-500 shadow-lg shadow-cyber-yellow-500/10 border-t border-l border-r border-cyber-yellow-500/30'
                : 'bg-midnight-900/50 text-gray-300 hover:bg-midnight-800 hover:text-cyber-yellow-400 border-t border-l border-r border-midnight-600'
            }`}
          >
            <Users className="h-4 w-4 md:h-5 md:w-5" />
            Our Team
          </button>
          
          <button
            onClick={() => setActiveTab('approach')}
            className={`flex items-center gap-2 rounded-t-lg px-4 py-2 md:px-6 md:py-3 text-sm font-medium transition-colors ${
              activeTab === 'approach'
                ? 'bg-midnight-800 text-cyber-yellow-500 shadow-lg shadow-cyber-yellow-500/10 border-t border-l border-r border-cyber-yellow-500/30'
                : 'bg-midnight-900/50 text-gray-300 hover:bg-midnight-800 hover:text-cyber-yellow-400 border-t border-l border-r border-midnight-600'
            }`}
          >
            <Code2 className="h-4 w-4 md:h-5 md:w-5" />
            Approach
          </button>
          
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 rounded-t-lg px-4 py-2 md:px-6 md:py-3 text-sm font-medium transition-colors ${
              activeTab === 'experience'
                ? 'bg-midnight-800 text-cyber-yellow-500 shadow-lg shadow-cyber-yellow-500/10 border-t border-l border-r border-cyber-yellow-500/30'
                : 'bg-midnight-900/50 text-gray-300 hover:bg-midnight-800 hover:text-cyber-yellow-400 border-t border-l border-r border-midnight-600'
            }`}
          >
            <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
            Experience
          </button>
        </div>
        
        {/* Main content area with visual outline */}
        <div className="mt-8 rounded-lg border border-midnight-600 bg-midnight-900/20 p-5 md:p-6 backdrop-blur-sm shadow-lg shadow-midnight-900/10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
