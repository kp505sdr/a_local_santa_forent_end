import React, { useState, useRef } from "react";

const Clipboard = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    setCopied(true);
  };

  return (
    <>
      {" "}
      <div className="flex items-center justify-end pb-2">
        <button
          onClick={handleCopy}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 text-xs sm:text-sm"
        >
          Copy Text
        </button>
        {copied && (
          <span className="ml-2 mt-3 text-green-600 text-xs sm:text-sm">
            Copied!
          </span>
        )}
      </div>
      <div ref={textRef} className="h-96 overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default Clipboard;
