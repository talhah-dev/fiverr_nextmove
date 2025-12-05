'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Lun: any;
    Cal: any;
  }
}

const CalendlyWidget = () => {
  const hasInitialized = useRef(false);

  useEffect(() => {
    // This effect hook will inject the Lunacal script directly.
    // It's designed to run only on the client side.
    if (typeof window === 'undefined' || hasInitialized.current) {
      return;
    }

    // Prevent multiple initializations
    if (window.Lun && window.Lun.loaded) {
      console.log('Lunacal already loaded, re-initializing widget only');
      try {
        const parts=["k","n","i","L","l","a","c"].reverse();
        const key=parts.map(ch=>String.fromCharCode(ch.charCodeAt(0)+1)).map(ch=>String.fromCharCode(ch.charCodeAt(0)-1)).join("");
        const value="team/nextmove-digital/meeting";
        const inlineOpts: Record<string, string> = {elementOrSelector:"#my-lunacal-inline",layout:""};
        inlineOpts[key]=value;
        window.Lun("inline",inlineOpts);
        window.Lun("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"embed-primary":"hsl(20, 100%, 50%)","embed-primary-light":"hsl(20, 85%, 95%)","embed-primary-dark":"hsl(20, 115%, 30%)"}}});
      } catch (error) {
        console.error('Error reinitializing Lunacal widget:', error);
      }
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'lunacal-script';
    
    // Check if script already exists
    if (document.getElementById('lunacal-script')) {
      return;
    }
    
    // The following script content is provided by Lunacal with error handling
    script.innerHTML = `
      try {
        (function(L,U,N){
          let p=(a,r)=>{a.q.push(r)},d=L.document,c;
          const init=()=>{
            if(!c){
              c=function(){
                const x=c,r=arguments;
                if(!x.loaded){
                  x.ns={};
                  x.q=x.q||[];
                  d.head.appendChild(d.createElement("script")).src=U;
                  x.loaded=true;
                }
                if(r[0]===N){
                  const api=()=>{p(api,arguments)},ns=r[1];
                  api.q=api.q||[];
                  if(typeof ns==="string"){
                    x.ns[ns]=x.ns[ns]||api;
                    p(x.ns[ns],r);
                    p(x,["initNamespace",ns]);
                  }else p(x,r);
                  return;
                }
                p(x,r);
              };
            }
            return c;
          };
          
          L.Lun=L.Lun||function(){
            const x=init();
            if(!x.loaded){
              x.ns={};
              x.q=x.q||[];
              d.head.appendChild(d.createElement("script")).src=U;
              x.loaded=true;
            }
            return x.apply(this,arguments);
          };
          
          const x=init();
          
          // Safe property definition with try-catch
          try {
            if (!Object.prototype.hasOwnProperty.call(L.Lun, 'ns')) {
              Object.defineProperty(L.Lun,"ns",{get(){return x.ns},set(v){x.ns=v},configurable:true});
            }
          } catch(e) { console.warn('ns property definition failed:', e); }
          
          try {
            if (!Object.prototype.hasOwnProperty.call(L.Lun, 'q')) {
              Object.defineProperty(L.Lun,"q",{get(){return x.q},set(v){x.q=v},configurable:true});
            }
          } catch(e) { console.warn('q property definition failed:', e); }
          
          try {
            if (!Object.prototype.hasOwnProperty.call(L.Lun, 'loaded')) {
              Object.defineProperty(L.Lun,"loaded",{get(){return x.loaded},set(v){x.loaded=v},configurable:true});
            }
          } catch(e) { console.warn('loaded property definition failed:', e); }
          
          if(!L.Cal&&c){
            try {
              if (!Object.prototype.hasOwnProperty.call(L, 'Cal')) {
                Object.defineProperty(L,"Cal",{get(){return c},set(){},configurable:true,enumerable:false});
              }
            } catch(e) { console.warn('Cal property definition failed:', e); }
          }
        })(window,"https://app.lunacal.ai/embed/embed.js","init");
        
        var parts=["k","n","i","L","l","a","c"].reverse();
        var key=parts.map(ch=>String.fromCharCode(ch.charCodeAt(0)+1)).map(ch=>String.fromCharCode(ch.charCodeAt(0)-1)).join("");
        var value="team/nextmove-digital/meeting";
        var inlineOpts={elementOrSelector:"#my-lunacal-inline",layout:""};
        inlineOpts[key]=value;
        
        Lun("init",{origin:"https://app.lunacal.ai"});
        Lun("inline",inlineOpts);
        Lun("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"embed-primary":"hsl(20, 100%, 50%)","embed-primary-light":"hsl(20, 85%, 95%)","embed-primary-dark":"hsl(20, 115%, 30%)"}}});
      } catch (error) {
        console.error('Lunacal initialization error:', error);
      }
    `;
    
    document.body.appendChild(script);
    hasInitialized.current = true;

    return () => {
      // Cleanup the script and the widget when the component unmounts
      const existingScript = document.getElementById('lunacal-script');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
      const widget = document.getElementById('my-lunacal-inline');
      if (widget) {
        widget.innerHTML = '';
      }
      hasInitialized.current = false;
    };
  }, []);

  return (
    <section id="termine" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Termin <span className="relative">
              <span className="relative z-10">vereinbaren</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Wählen Sie einen passenden Termin für ein unverbindliches Beratungsgespräch
          </p>
        </div>
        
        {/* LunaCal Widget */}
        <div className="rounded-lg overflow-hidden mx-auto max-w-4xl h-[650px]">
          <div 
            style={{ width: '100%', height: '100%', overflow: 'scroll' }} 
            id="my-lunacal-inline"
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget; 