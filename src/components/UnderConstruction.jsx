import React from 'react';
import { Construction, ArrowRight, Mail } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Icon and Header */}
        <div className="space-y-4">
          <Construction className="w-20 h-20 mx-auto text-blue-500 animate-bounce" />
          <h1 className="text-4xl font-bold text-gray-900">
            We're Building Something Great
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-xl text-gray-600">
            Our website is currently under construction. We're working hard to bring you an amazing experience.
          </p>
          <p className="text-lg text-gray-500">
            Check back soon for updates!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-500 h-2.5 rounded-full w-3/4 animate-pulse"></div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 pt-8">
          <p className="text-gray-600">
            Want to know when we launch?
          </p>
          
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} EISCO. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;