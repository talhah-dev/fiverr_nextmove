'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Settings, Shield, BarChart3, Target, ExternalLink } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const bannerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Check for existing consent on mount
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    } else {
      // Load allowed scripts based on existing consent
      const savedPreferences = JSON.parse(consent);
      loadScriptsBasedOnConsent(savedPreferences);
    }
  }, []);

  // Load external scripts based on consent
  const loadScriptsBasedOnConsent = useCallback((prefs: CookiePreferences) => {
    // Google Analytics
    if (prefs.analytics) {
      // Add gtag script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(gtagScript);
      
      const gtagConfig = document.createElement('script');
      gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(gtagConfig);
    }

    // Marketing/Meta Pixel
    if (prefs.marketing) {
      const metaPixel = document.createElement('script');
      metaPixel.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(metaPixel);
    }

    // Update Google Consent Mode
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
        ad_user_data: prefs.marketing ? 'granted' : 'denied',
        ad_personalization: prefs.marketing ? 'granted' : 'denied',
        functionality_storage: prefs.functional ? 'granted' : 'denied',
        personalization_storage: prefs.functional ? 'granted' : 'denied',
        security_storage: 'granted'
      });
    }
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    const consentData = {
      ...prefs,
      timestamp: Date.now(),
      version: '1.0'
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    loadScriptsBasedOnConsent(prefs);
  }, [loadScriptsBasedOnConsent]);

  const handleAcceptAll = useCallback(() => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  }, [saveConsent]);

  const handleRejectAll = useCallback(() => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  }, [saveConsent]);

  const handleSaveSettings = useCallback(() => {
    saveConsent(preferences);
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
      setShowDetails(false);
    }, 300);
  }, [preferences, saveConsent]);

  const togglePreference = useCallback((key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Always required
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  if (!showBanner) return null;

  const buttonBaseClass = `
    relative px-4 sm:px-6 lg:px-8 py-3 lg:py-4 
    font-semibold text-sm sm:text-base lg:text-base
    border border-opacity-50 rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-[44px] touch-manipulation
  `;

  const primaryButtonClass = `
    ${buttonBaseClass}
    bg-[#ff5500] bg-opacity-10 text-white 
    border-[#ff5500] border-opacity-50
    hover:bg-[#ff5500] hover:bg-opacity-20
    hover:border-[#ff5500] hover:border-opacity-80
    hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]
    focus:ring-[#ff5500]
    active:transform active:scale-[0.98]
  `;

  const secondaryButtonClass = `
    ${buttonBaseClass}
    bg-gray-800 bg-opacity-50 text-white 
    border-gray-600 border-opacity-50
    hover:bg-gray-700 hover:bg-opacity-70
    hover:border-gray-500
    focus:ring-gray-500
    active:transform active:scale-[0.98]
  `;

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-[9998] ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`} />
      
      {/* Main Banner */}
      <div 
        ref={bannerRef}
        className={`
          fixed bottom-0 left-0 right-0 z-[9999]
          bg-black border-t border-gray-800
          transform transition-all duration-300 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-xl sm:border
          lg:max-w-4xl lg:mx-auto lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2
        `}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
            {/* Content */}
            <div className="flex-1 space-y-3 lg:space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#ff5500] flex-shrink-0 mt-0.5" />
                  <h2 className="text-lg lg:text-xl font-semibold text-white">
                    Cookie-Einstellungen
                  </h2>
                </div>
              </div>
              
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche 
                Nutzererfahrung zu bieten, unsere Website zu verbessern und Ihnen personalisierte 
                Inhalte und Werbung anzuzeigen. Einige Cookies sind für die Funktionalität 
                unserer Website erforderlich, während andere uns helfen, zu verstehen, 
                wie Sie unsere Website nutzen.
              </p>

              <p className="text-xs lg:text-sm text-gray-400">
                <strong>Drittlandübermittlung:</strong> Einige Dienste übermitteln Daten in die USA. 
                Mit Ihrer Einwilligung stimmen Sie auch dieser Datenübermittlung zu.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                <a 
                  href="/datenschutz" 
                  className="text-[#ff5500] hover:text-[#ff8040] transition-colors underline"
                >
                  Datenschutzerklärung
                </a>
                <span className="text-gray-500">•</span>
                <a 
                  href="/impressum" 
                  className="text-[#ff5500] hover:text-[#ff8040] transition-colors underline"
                >
                  Impressum
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-3 lg:min-w-[200px]">
              <button
                onClick={handleAcceptAll}
                className={primaryButtonClass}
              >
                Alle akzeptieren
              </button>
              
              <button
                onClick={handleRejectAll}
                className={secondaryButtonClass}
              >
                Nur notwendige
              </button>
              
              <button
                onClick={() => setShowDetails(true)}
                className={`${secondaryButtonClass} flex items-center justify-center gap-2`}
              >
                <Settings className="w-4 h-4" />
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Settings Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-70" onClick={() => setShowDetails(false)} />
          
          <div 
            ref={detailsRef}
            className="relative bg-black border border-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-black border-b border-gray-800 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#ff5500]" />
                  Cookie-Einstellungen
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              <p className="text-gray-300 text-sm lg:text-base">
                Hier können Sie detailliert einstellen, welche Cookies wir verwenden dürfen. 
                Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität 
                und Benutzererfahrung unserer Website beeinträchtigen kann.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-white">Notwendige Cookies</h4>
                        <span className="text-xs bg-green-500 bg-opacity-20 text-green-400 px-2 py-1 rounded">
                          Immer aktiv
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich 
                        und können nicht deaktiviert werden.
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p><strong>Zweck:</strong> Sitzungsverwaltung, Sicherheit, Cookie-Einstellungen</p>
                        <p><strong>Speicherdauer:</strong> Session / 12 Monate</p>
                        <p><strong>Anbieter:</strong> NextMove Digital (Eigene)</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled={true}
                        className="w-5 h-5 rounded border-gray-600 bg-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold text-white">Analyse-Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, 
                        um sie kontinuierlich zu verbessern.
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p><strong>Zweck:</strong> Website-Analyse, Leistungsmessung</p>
                        <p><strong>Speicherdauer:</strong> 24 Monate</p>
                        <p><strong>Anbieter:</strong> Google Analytics (USA) <ExternalLink className="w-3 h-3 inline ml-1" /></p>
                        <p><strong>Datenübermittlung:</strong> USA (Angemessenheitsbeschluss EU-US DPF)</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => togglePreference('analytics')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff5500] peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff5500]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold text-white">Marketing-Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen 
                        und die Effektivität unserer Werbekampagnen zu messen.
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p><strong>Zweck:</strong> Personalisierte Werbung, Remarketing, Conversion-Tracking</p>
                        <p><strong>Speicherdauer:</strong> 12-24 Monate</p>
                        <p><strong>Anbieter:</strong> Meta Pixel, Google Ads, LinkedIn (USA) <ExternalLink className="w-3 h-3 inline ml-1" /></p>
                        <p><strong>Datenübermittlung:</strong> USA (Angemessenheitsbeschluss EU-US DPF)</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePreference('marketing')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff5500] peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff5500]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="w-5 h-5 text-yellow-500" />
                        <h4 className="font-semibold text-white">Funktionale Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        Diese Cookies ermöglichen erweiterte Funktionen und Personalisierungen 
                        für ein verbessertes Nutzererlebnis.
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p><strong>Zweck:</strong> Benutzereinstellungen, Präferenzen speichern</p>
                        <p><strong>Speicherdauer:</strong> 12 Monate</p>
                        <p><strong>Anbieter:</strong> NextMove Digital, Calendly (USA)</p>
                        <p><strong>Datenübermittlung:</strong> Teilweise USA</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={() => togglePreference('functional')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff5500] peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff5500]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 bg-gray-900 bg-opacity-50 p-3 rounded-lg">
                <p className="mb-2"><strong>Hinweis zur Datenübermittlung in Drittländer:</strong></p>
                <p>
                  Durch die Aktivierung von Analyse- und Marketing-Cookies stimmen Sie auch der 
                  Übermittlung Ihrer Daten in die USA zu. Die USA verfügen über ein von der EU-Kommission 
                  anerkanntes Datenschutzniveau (EU-US Data Privacy Framework). Dennoch können 
                  US-Behörden unter bestimmten Umständen auf Ihre Daten zugreifen.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-black border-t border-gray-800 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSaveSettings}
                  className={`${primaryButtonClass} flex-1`}
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={handleAcceptAll}
                  className={`${secondaryButtonClass} flex-1`}
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;