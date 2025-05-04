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
  CheckCircle2
} from 'lucide-react';

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
};

type TabType = 'partnership' | 'expertise' | 'experience';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>('partnership');

  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      icon: <Code2 className="h-5 w-5 text-fuchsia-400" />,
      skills: [
        { name: 'React & Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS/JavaScript', level: 95 },
      ],
    },
    {
      category: 'Backend',
      icon: <Database className="h-5 w-5 text-fuchsia-400" />,
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Firebase', level: 80 },
        { name: 'Authentication', level: 85 },
      ],
    },
    {
      category: 'Data & Integrations',
      icon: <Database className="h-5 w-5 text-fuchsia-400" />,
      skills: [
        { name: 'ETL Pipelines', level: 85 },
        { name: 'Data Management', level: 80 },
        { name: 'API Integration', level: 90 },
        { name: 'Automation', level: 85 },
      ],
    },
    {
      category: 'Tools & Methods',
      icon: <Briefcase className="h-5 w-5 text-fuchsia-400" />,
      skills: [
        { name: 'Git & CI/CD', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Agile', level: 85 },
        { name: 'Performance', level: 80 },
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
                  <Users className="h-8 w-8 text-fuchsia-400" />
                  <h3 className="text-2xl font-bold text-fuchsia-200">Our Partnership</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg bg-indigo-900/30 p-4 backdrop-blur-sm">
                    <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-fuchsia-400" />
                    <p className="text-indigo-100">
                      We combine <span className="text-fuchsia-200 font-medium">technical expertise</span> with <span className="text-fuchsia-200 font-medium">business acumen</span> to deliver solutions that help businesses thrive.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 rounded-lg bg-indigo-900/30 p-4 backdrop-blur-sm">
                    <Globe className="mt-1 h-5 w-5 flex-shrink-0 text-fuchsia-400" />
                    <p className="text-indigo-100">
                      Based in <span className="text-fuchsia-200 font-medium">Sofia, Bulgaria</span>, we serve both local and international clients with a focus on quality and communication.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 rounded-lg bg-indigo-900/30 p-4 backdrop-blur-sm">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-fuchsia-400" />
                    <p className="text-indigo-100">
                      We prioritize <span className="text-fuchsia-200 font-medium">clear communication</span>, <span className="text-fuchsia-200 font-medium">strategic thinking</span>, and <span className="text-fuchsia-200 font-medium">technical excellence</span> in every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Team Member: Deyan */}
                <div className="group overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/20">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/80 to-violet-600/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">DM</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold text-fuchsia-200">Deyan Mitev</h3>
                  <p className="text-center text-sm font-medium text-fuchsia-100/90">Technical Lead</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>React & Next.js Expert</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>Data Management Solutions</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Member: Matey */}
                <div className="group overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/20">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full transform transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/80 to-violet-600/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">MM</div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold text-fuchsia-200">Matey Manasiev</h3>
                  <p className="text-center text-sm font-medium text-fuchsia-100/90">Business Development</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>Client Relations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>Project Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400" />
                      <span>Business Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'expertise':
        return (
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div 
                  key={group.category} 
                  className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/20"
                >
                  <div className="mb-4 flex items-center gap-3">
                    {group.icon}
                    <h3 className="text-xl font-semibold text-fuchsia-200">{group.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-indigo-100">{skill.name}</span>
                          <span className="text-xs font-medium text-fuchsia-300">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-indigo-900/50">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-all duration-500" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-fuchsia-200">Our Approach</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-indigo-800/20 p-4 backdrop-blur-sm">
                  <h4 className="mb-2 font-medium text-fuchsia-200">Discovery</h4>
                  <p className="text-sm text-indigo-100/80">We start by understanding your business needs and technical requirements before proposing solutions.</p>
                </div>
                <div className="rounded-lg bg-indigo-800/20 p-4 backdrop-blur-sm">
                  <h4 className="mb-2 font-medium text-fuchsia-200">Implementation</h4>
                  <p className="text-sm text-indigo-100/80">We develop using modern best practices, with regular communication and progress updates.</p>
                </div>
                <div className="rounded-lg bg-indigo-800/20 p-4 backdrop-blur-sm">
                  <h4 className="mb-2 font-medium text-fuchsia-200">Support</h4>
                  <p className="text-sm text-indigo-100/80">We maintain and optimize your solution, ensuring it continues to meet your evolving needs.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-fuchsia-500 before:via-violet-500 before:to-fuchsia-300 md:ml-8">
              {/* Timeline Item 1 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-md">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-fuchsia-200">BuildHolding Project</div>
                      <div className="text-sm text-indigo-100/70">Feb 2024 - Apr 2024</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-fuchsia-900/20 px-3 py-1 text-xs font-medium text-fuchsia-200 sm:mt-0">
                      Complete Website Redesign
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-indigo-900/20 p-4 backdrop-blur-sm">
                    <ul className="space-y-2 text-sm text-indigo-100">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Multi-language support (Bulgarian, English, Russian)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Custom admin panel for content management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Google Maps integration and responsive design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-md">
                  <Database className="h-5 w-5 text-white" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-fuchsia-200">Data Integration Projects</div>
                      <div className="text-sm text-indigo-100/70">2023 - Present</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-fuchsia-900/20 px-3 py-1 text-xs font-medium text-fuchsia-200 sm:mt-0">
                      Multiple Clients
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-indigo-900/20 p-4 backdrop-blur-sm">
                    <ul className="space-y-2 text-sm text-indigo-100">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>ETL pipelines and data migration solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>System integration via API development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Automated reporting and data workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative flex items-start">
                <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-md">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-xl font-semibold text-fuchsia-200">Custom Tools & Automations</div>
                      <div className="text-sm text-indigo-100/70">2022 - Present</div>
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-fuchsia-900/20 px-3 py-1 text-xs font-medium text-fuchsia-200 sm:mt-0">
                      Bespoke Solutions
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-indigo-900/20 p-4 backdrop-blur-sm">
                    <ul className="space-y-2 text-sm text-indigo-100">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Process automation bots and scripts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Internal tools for workflow optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                        <span>Custom data management applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-fuchsia-400" />
                  <h3 className="text-xl font-semibold text-fuchsia-200">Our Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-indigo-800/20 p-3">
                    <h4 className="font-medium text-fuchsia-200">Deyan Mitev</h4>
                    <p className="text-sm text-indigo-100">Technical University of Sofia</p>
                    <p className="text-xs text-indigo-100/70">Pursuing a Bachelor's degree in Mechanical Engineering</p>
                  </div>
                  <div className="rounded-lg bg-indigo-800/20 p-3">
                    <h4 className="font-medium text-fuchsia-200">Matey Manasiev</h4>
                    <p className="text-sm text-indigo-100">University of National and World Economy</p>
                    <p className="text-xs text-indigo-100/70">Pursuing a Business degree</p>
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-fuchsia-900/20 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-fuchsia-400" />
                  <h3 className="text-xl font-semibold text-fuchsia-200">Professional Development</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-indigo-100">We continuously upgrade our skills through:</p>
                  <ul className="space-y-2 text-sm text-indigo-100">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                      <span>Industry conferences and workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                      <span>Online courses in emerging technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-400" />
                      <span>Business and technical certifications</span>
                    </li>
                  </ul>
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold">About GenDev</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-indigo-100">
            GenDev is a specialized web development and data management partnership founded by two 
            professionals passionate about creating digital solutions that drive business growth. 
            Our compact team size allows us to offer personalized service with direct access to the 
            founders throughout your project.
          </p>
        </div>
      </ScrollReveal>
      {/* Tabs */}
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-2 border-b border-indigo-800/30 pb-1">
          <button
            onClick={() => setActiveTab('partnership')}
            className={`flex items-center gap-2 rounded-t-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'partnership'
                ? 'bg-indigo-900/50 text-fuchsia-200 shadow-lg shadow-fuchsia-900/10'
                : 'bg-indigo-900/20 text-indigo-100/80 hover:bg-indigo-900/30 hover:text-fuchsia-200'
            }`}
          >
            <Users className="h-5 w-5" />
            Our Team
          </button>
          
          <button
            onClick={() => setActiveTab('expertise')}
            className={`flex items-center gap-2 rounded-t-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'expertise'
                ? 'bg-indigo-900/50 text-fuchsia-200 shadow-lg shadow-fuchsia-900/10'
                : 'bg-indigo-900/20 text-indigo-100/80 hover:bg-indigo-900/30 hover:text-fuchsia-200'
            }`}
          >
            <Code2 className="h-5 w-5" />
            Expertise
          </button>
          
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 rounded-t-lg px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'experience'
                ? 'bg-indigo-900/50 text-fuchsia-200 shadow-lg shadow-fuchsia-900/10'
                : 'bg-indigo-900/20 text-indigo-100/80 hover:bg-indigo-900/30 hover:text-fuchsia-200'
            }`}
          >
            <Briefcase className="h-5 w-5" />
            Experience
          </button>
        </div>
        
        {/* Main content area with visual outline */}
        <div className="mt-8 rounded-xl border border-indigo-800/30 bg-indigo-900/10 p-6 backdrop-blur-sm shadow-lg shadow-indigo-900/10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
