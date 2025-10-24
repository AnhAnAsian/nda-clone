import React, { useEffect, useRef } from 'react';

interface GoogleMapsProps {
  className?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dgsWcQYVfJgJgY&libraries=places';
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        // Fallback: show a simple text message
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; border-radius: 8px; padding: 20px; text-align: center;">
              <div>
                <h3 style="margin: 0 0 10px 0; color: #333;">NDA Kaufhaus</h3>
                <p style="margin: 0; color: #666;">Gransee, Deutschland</p>
                <p style="margin: 10px 0 0 0; color: #888; font-size: 14px;">
                  <a href="https://maps.google.com/?q=NDA+Kaufhaus+Gransee" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: none;">
                    Auf Google Maps öffnen →
                  </a>
                </p>
              </div>
            </div>
          `;
        }
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 53.0068152, lng: 13.1570846 },
        zoom: 15,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Add marker
      new window.google.maps.Marker({
        position: { lat: 53.0068152, lng: 13.1570846 },
        map: map,
        title: 'NDA Kaufhaus',
        animation: window.google.maps.Animation.DROP
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 5px 0; color: #333;">NDA Kaufhaus</h3>
            <p style="margin: 0; color: #666;">Gransee, Deutschland</p>
            <p style="margin: 5px 0 0 0;">
              <a href="https://maps.google.com/?q=NDA+Kaufhaus+Gransee" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: none;">
                Route berechnen →
              </a>
            </p>
          </div>
        `
      });

      // Show info window on marker click
      const marker = new window.google.maps.Marker({
        position: { lat: 53.0068152, lng: 13.1570846 },
        map: map,
        title: 'NDA Kaufhaus'
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full rounded-lg ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
};

export default GoogleMaps;
