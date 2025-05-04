'use client';

export default function ContactInfo() {
  return (
    <div className="rounded-xl bg-indigo-900/20 backdrop-blur-sm p-6 shadow-xl ring-1 ring-indigo-800/30">
      <h2 className="mb-4 text-xl font-bold text-fuchsia-200">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mr-3 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 text-fuchsia-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-fuchsia-200">Email</h3>
            <a href="mailto:contact@gendev.tech" className="text-indigo-100 hover:text-fuchsia-200 transition-colors">
              contact@gendev.tech
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 text-fuchsia-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-fuchsia-200">Location</h3>
            <p className="text-indigo-100">
              Sofia, Bulgaria <span className="text-indigo-100/60">(Remote work available worldwide)</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 text-fuchsia-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-fuchsia-200">Availability</h3>
            <p className="text-indigo-100">
              Mon-Fri, 9:00 - 18:00 EEST (UTC+3)<br />
              <span className="text-indigo-100/60">Response within 24 hours</span>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-3 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-violet-600/30 text-fuchsia-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-fuchsia-200">Phone</h3>
            <a href="tel:+359888123456" className="text-indigo-100 hover:text-fuchsia-200 transition-colors">
              +359 88 812 3456
            </a>
            <p className="text-xs text-indigo-100/60 mt-1">For urgent inquiries only</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="mb-3 text-lg font-medium text-fuchsia-200">Connect</h3>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600/20 to-violet-600/20 text-fuchsia-200 transition-all hover:from-fuchsia-600/30 hover:to-violet-600/30 hover:text-white"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600/20 to-violet-600/20 text-fuchsia-200 transition-all hover:from-fuchsia-600/30 hover:to-violet-600/30 hover:text-white"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600/20 to-violet-600/20 text-fuchsia-200 transition-all hover:from-fuchsia-600/30 hover:to-violet-600/30 hover:text-white"
            aria-label="Twitter"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
