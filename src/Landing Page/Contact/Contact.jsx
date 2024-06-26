import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.css';
import L from 'leaflet';
import 'leaflet-minimap';

const MinimapControl = () => {
  const map = useMap();
  
  useEffect(() => {
    const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib = 'Map data © OpenStreetMap contributors';
    const osm = new L.TileLayer(osmUrl, { minZoom: 0, maxZoom: 13, attribution: osmAttrib });
    const miniMap = new L.Control.MiniMap(osm, { toggleDisplay: true }).addTo(map);
    
    return () => {
      map.removeControl(miniMap);
    };
  }, [map]);
  
  return null;
};

const Contact = () => {
  return (
    <>
      <div className='shadow-lg shadow-[grey]'>
        <Navbar />
      </div>
      <main className='max-w-7xl w-full mt-12'>
        <section className='w-1/2 px-12'>
          <h1 className='text-6xl font-bold'>Have Questions?</h1>
          <p className='mt-12 text-xl'>Please feel free to call or email us,<br />or use our contact form to get in touch with us.<br />We look forward to hearing from you!</p>
          <p className='text-2xl font-semibold mt-12 mb-5'>Emergency? Call Us:</p>
          <a href="" className='text-xl'>+123 45 678 910</a>
          <p className='text-2xl font-semibold mt-12 mb-5'>Send Us Mail</p>
          <a href="" className='text-xl underline underline-offset-[5px]'>caresync@healthcare.com</a>
          <p className='text-2xl font-semibold mt-12 mb-5'>Find the Studio</p>
          <MapContainer center={[6.5965, 3.3421]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[6.5965, 3.3421]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <MinimapControl />
          </MapContainer>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default Contact