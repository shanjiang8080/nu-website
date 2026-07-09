import React, { useState } from 'react';

export default function Bio() {
  // Dummy text split into lines
  const [text] = useState(
    `
    I'm a third-year computer-science student currently working at 
    Data On The Spot, with experience in full-stack development, automation, 
    and server operation. I'm also taking a game studies minor and am making 
    my own game. Finally, I like making pixel-art! As you can clearly see.
    
    This website tells you all I want you to know about me, 
    including my skills, projects, work experience, and whatever else.
    `
  );

  const lines = text.split('\n');
  const characterCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="w-full mx-auto border border-gray-300 shadow-lg bg-white font-sans flex flex-col h-[calc(var(--spacing-pixel-unit))*6]">
      
      {/* Top Menu Row */}
      <div className="bg-white px-2 py-1 flex space-x-4 border-b border-gray-200 text-sm text-gray-600 select-none">
        <span className="px-2 py-0.5">File</span>
        <span className="px-2 py-0.5">Edit</span>
        <span className="px-2 py-0.5">View</span>
        <span className="px-2 py-0.5">Help</span>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-auto font-mono text-sm leading-6 bg-gray-50 selection:bg-blue-100">
        
        {/* Line Numbers */}
        <div className="text-right px-4 py-3 bg-gray-50 border-r border-gray-200 text-gray-400 select-none sticky left-0 z-10 min-w-12">
          {lines.map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>

        {/* Text Container */}
        <p className="flex-1 p-3 md:whitespace-pre bg-white text-gray-800 overflow-x-auto text-wrap">
          {text}
        </p>
      </div>

      {/* Bottom Info Status Bar */}
      <div className="bg-gray-100 border-t border-gray-200 px-4 py-1 flex justify-end space-x-6 text-xs text-gray-500 select-none">
        <div>
          <span>Ln {lines.length}, Col {lines[lines.length - 1].length + 1}</span>
        </div>
        <div>
          <span>{characterCount} chars</span>
        </div>
        <div>
          <span>{wordCount} words</span>
        </div>
        <div>
          <span>UTF-8</span>
        </div>
      </div>

    </div>
  );
};