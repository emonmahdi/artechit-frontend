import React from 'react';

const TopNavbar = () => {
  return (
    <div className="bg-gray-800 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Contact Number */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4v16h18V4H3z" />
            </svg>
            <span>+8801791-061255, +8801790-844742</span>
          </span>
        </div>

        {/* Social Links (Facebook and LinkedIn) */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.99 3.66 9.13 8.47 9.94v-7.04h-2.56v-2.9h2.56v-2.2c0-3.17 1.88-4.94 4.73-4.94 1.38 0 2.83.25 2.83.25v3h-1.6c-1.57 0-2.1.99-2.1 2.03v2.36h3.42l-1.49 2.9h-1.93v7.04c4.81-.81 8.47-4.95 8.47-9.94z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path d="M20.453 3h-16.906c-.874 0-1.577.748-1.577 1.677v14.646c0 .93.703 1.677 1.577 1.677h16.906c.874 0 1.577-.748 1.577-1.677V4.677c0-.93-.703-1.677-1.577-1.677zm-12.281 13.22v-7.885h2.852v7.885h-2.852zm1.426-8.992c-.927 0-1.648-.74-1.648-1.654 0-.914.721-1.654 1.648-1.654.926 0 1.647.74 1.647 1.654 0 .914-.721 1.654-1.647 1.654zm9.319 8.992h-2.853v-4.43c0-1.05-.547-1.646-1.465-1.646-1.071 0-1.507.811-1.507 1.652v4.424h-2.852v-7.885h2.852v1.1h.039c.39-.652 1.105-1.066 1.985-1.066 1.546 0 2.698 1.013 2.698 3.018v4.834z"/>
            </svg>
          </a>
        </div>

        {/* Office Address */}
        <div className="flex items-center">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7h3v9h4V7h2v9h4V7h3l-10-5z" />
            </svg>
            <span> C & B Road, opposite of Mohila TTC, Barisal</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
