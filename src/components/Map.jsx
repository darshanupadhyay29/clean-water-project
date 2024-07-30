import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS

const Map = () => {
  // Example coordinates for the center of the map and markers
  const center = [20.5937, 78.9629]; // Center on India (change as needed)
  const markers = [
    { position: [15.3173, 75.7139], description: 'Water Scarcity in Karnataka' }, // Example marker
    { position: [28.6139, 77.2090], description: 'Water Scarcity in Delhi' }, // Example marker
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Global Water Scarcity Map</h2>
        <div className="relative h-96">
          <MapContainer center={center} zoom={5} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Map;
