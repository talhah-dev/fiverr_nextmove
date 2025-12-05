'use client';

import { useEffect } from 'react';

export default function ScrollPositionManager() {
  useEffect(() => {
    let scrollPosition = 0;

    const saveScrollPosition = () => {
      scrollPosition = window.scrollY;
    };

    const restoreScrollPosition = () => {
      window.scrollTo(0, scrollPosition);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        saveScrollPosition();
      } else {
        // Restore position after a small delay to ensure the page is fully loaded
        setTimeout(restoreScrollPosition, 50);
      }
    };

    const handleBeforeUnload = () => {
      saveScrollPosition();
    };

    // Save scroll position when tab becomes hidden
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Save scroll position before page unloads
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}