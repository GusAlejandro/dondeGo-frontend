import { useEffect, useState } from 'react';

export function useGoogleMaps(apiKey: string): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
    
    if (existingScript) {
      if ((window as any).google?.maps) {
        setLoaded(true);
      } else {
        existingScript.addEventListener('load', () => setLoaded(true));
      }
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, [apiKey]);

  return loaded;
}
