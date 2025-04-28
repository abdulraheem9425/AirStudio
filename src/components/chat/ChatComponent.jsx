import React from 'react';


const ChatComponent = () => {
  return (
    <>
      <button 
        className="bg-blue-600 p-2 px-8 text-white mb-4 rounded-full ml-4 sm:ml-8 lg:ml-43 mt-6" 
      >
        Back
      </button>

      <div className="max-w-5xl mx-auto  mt-2 shadow-md flex flex-col gap-3 mb-10">
        <div className="rounded-sm h-10 bg-gray-100  shadow-sm flex items-center px-2 max-w-full ">
          <h4 className="font-semibold  text-lg"  >Chat</h4>
        </div>

        <div className="max-w-full flex justify-end">
          <img
            src="/assets/images/chatbackground.png"
            className="w-full max-w-2xl mr-3 h-auto object-cover rounded-md"
            alt="Chat background"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between mt-3 shadow-sm px-3 py-2 bg-gray-100 rounded-sm">
          <input
            type="text"
            className="flex-1 bg-gray-200 h-10 rounded-sm px-4 text-sm  "
            placeholder="Type here..."
          />

          <div className="flex gap-2 sm:gap-3">
            <img src="/assets/images/Buttonchat.png" className="h-8 w-8" alt="Send" />
            <img src="/assets/images/Buttonchat1.png" className="h-8 w-8" alt="Options" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
