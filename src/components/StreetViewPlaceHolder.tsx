import './StreetViewPlaceholder.css';
import { useEffect, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

type StreetViewProps = {
    lat: number;
    lng: number;
}

function StreetViewPlaceHolder({lat, lng}: StreetViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        id: 'google-map-script',
    });

    useEffect(() => {
        if (!isLoaded || !containerRef.current) return;

        new google.maps.StreetViewPanorama(containerRef.current, {
        position: { lat, lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        addressControl: false,
        panControl: false,
        showRoadLabels: false,
        });
    }, [isLoaded, lat, lng]);

    return (
        <div className="streetview-placeholder" ref={containerRef}></div>
    );
}

export default StreetViewPlaceHolder;