'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Analytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Client-side check for EU countries based on timezone or other indicators
    // For static generation, we'll load analytics by default and let GDPR consent handle EU compliance
    setShouldLoad(true);
  }, []);

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  if (!shouldLoad || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="ga4"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { 
            anonymize_ip: true,
            cookie_flags: 'secure;samesite=none'
          });
        `}
      </Script>
    </>
  );
} 