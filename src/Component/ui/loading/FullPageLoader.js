import React, { useEffect } from 'react';

const FullPageLoader = () => {
  useEffect(() => {
    // Create a <style> tag
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    // Append the <style> tag to the document's head
    document.head.appendChild(styleTag);

    // Cleanup function to remove the style tag when the component is unmounted
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

const loaderStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999, // Ensures loader stays on top
};

const spinnerStyle = {
  border: '16px solid #f3f3f3', // Light gray background
  borderRadius: '50%',
  borderTop: '16px solid #3498db', // Blue spinner color
  width: '120px',
  height: '120px',
  animation: 'spin 2s linear infinite',
};

export default FullPageLoader;
