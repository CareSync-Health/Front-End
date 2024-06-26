import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  }
  
  const BOUNDS_STYLE = { weight: 1 }
  
  function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap()
  
    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap],
    )
    useMapEvent('click', onClick)
  
    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      // Update the minimap's view to match the parent map's center and zoom
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])
  
    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
    useEventHandlers({ instance: parentMap }, handlers)
  
    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
  }
  
  function MinimapControl({ position, zoom }) {
    const parentMap = useMap()
    const mapZoom = zoom || 0
  
    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
      () => (
        <MapContainer
          style={{ height: 80, width: 80 }}
          center={parentMap.getCenter()}
          zoom={mapZoom}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
        </MapContainer>
      ),
      [],
    )
  
    const positionClass =
      (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar">{minimap}</div>
      </div>
    )
  }
  
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
            <MinimapControl position="topright" />
          </MapContainer>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default Contact