import React from 'react';

export const MessageComponent = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24 pb-10 pt-10 shadow-md">
      <button 
        className="bg-blue-600 p-2 px-8 text-white mb-2 rounded-full" 
        aria-label="Go back"
      >
        Back
      </button>

      <div className="flex items-center justify-between border border-gray-300 p-3 bg-white rounded-md">
        <div className="flex items-center gap-4">
          <img 
            src="/assets/images/Doe.png" 
            alt="John Doe" 
            className="w-14 h-14 rounded-full" 
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
          </div>
        </div>

        <h2 className="text-sm text-gray-600">13 minutes ago</h2>
      </div>
    </div>
  );
};
