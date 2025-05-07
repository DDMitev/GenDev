'use client';

import { useState, useEffect, useRef } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';

interface EmailTemplateViewerProps {
  templateUrl: string;
  title: string;
  height?: number;
  showExternalLink?: boolean;
}

export default function EmailTemplateViewer({ 
  templateUrl, 
  title, 
  height = 600,
  showExternalLink = true
}: EmailTemplateViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsLoading(false);
    };

    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {showExternalLink && (
          <a 
            href={templateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-cyber-yellow-500 hover:text-cyber-yellow-400 transition-colors"
          >
            View Full Template <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      
      <div className="relative w-full rounded-lg border border-midnight-600 bg-white overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-midnight-800/80 z-10">
            <Loader2 className="h-8 w-8 text-cyber-yellow-500 animate-spin" />
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          src={templateUrl}
          title={title}
          width="100%"
          height={height}
          className="block"
          style={{ backgroundColor: 'white' }}
        />
      </div>
    </div>
  );
}
