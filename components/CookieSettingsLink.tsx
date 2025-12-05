'use client';

import React from 'react';
import { Settings } from 'lucide-react';

const CookieSettingsLink = () => {
  const handleOpenSettings = () => {
    // Clear consent to show banner again
    localStorage.removeItem('cookie-consent');
    // Reload page to show banner
    window.location.reload();
  };

  return (
    <button
      onClick={handleOpenSettings}
      className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#ff5500] transition-colors duration-200"
    >
      <Settings className="w-4 h-4" />
      Cookie-Einstellungen
    </button>
  );
};

export default CookieSettingsLink;