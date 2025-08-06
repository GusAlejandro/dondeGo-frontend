import { useEffect, useRef } from 'react';

type StreetViewProps = {
  lat: number;
  lng: number;
};

function StreetView({ lat, lng }: StreetViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(window as any).google || !containerRef.current) return;

    new (window as any).google.maps.StreetViewPanorama(containerRef.current, {
      position: { lat, lng },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      showRoadLabels: false,        // disables road name labels
      addressControl: false,        // hides the address box
      linksControl: true,           // (optional) keep arrows
      panControl: false,            // hides compass-like pan control
      enableCloseButton: false 
    });
  }, [lat, lng]);

  return (
    <div className="streetview-wrapper">
    <div ref={containerRef} className="streetview-box" />
    </div>
  );
}

export default StreetView;
