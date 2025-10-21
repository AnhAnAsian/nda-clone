// Fallback script for GitHub Pages MIME type issues
// This script ensures JavaScript modules load correctly

(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Function to load script with correct MIME type
  function loadScript(src, type = 'module') {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = type;
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Try to load the main module
  const mainScript = document.querySelector('script[type="module"]');
  if (mainScript) {
    const src = mainScript.src;
    
    // Remove the original script
    mainScript.remove();
    
    // Try loading as module first
    loadScript(src, 'module')
      .catch(() => {
        // If module fails, try as regular script
        console.warn('Module loading failed, trying regular script...');
        return loadScript(src, 'text/javascript');
      })
      .catch((error) => {
        console.error('Failed to load script:', error);
      });
  }
})();
