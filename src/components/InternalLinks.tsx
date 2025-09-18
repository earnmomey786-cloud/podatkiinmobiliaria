import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLink {
  text: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  rel?: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  className?: string;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ 
  links, 
  title = "Enlaces relacionados",
  className = '' 
}) => {
  return (
    <div className={`bg-gray-800/30 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-serif text-white mb-4 flex items-center">
        <span className="w-1 h-6 bg-bronze-500 mr-3"></span>
        {title}
      </h3>
      
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
              rel={link.rel}
              target={link.isExternal ? '_blank' : undefined}
            >
              <div className="flex-shrink-0 mt-1">
                {link.isExternal ? (
                  <ExternalLink size={16} className="text-bronze-500" />
                ) : (
                  <ArrowRight size={16} className="text-bronze-500 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </div>
              
              <div className="flex-1">
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {link.text}
                </span>
                {link.description && (
                  <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternalLinks;