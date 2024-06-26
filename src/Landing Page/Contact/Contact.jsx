import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  return (
    <>
      {/* <div className='shadow-lg shadow-[grey]'>
        <Navbar />
      </div> */}
      <main className='max-w-7xl w-full mt-12 flex flex-wrap items-center'>
        <section className='md:w-1/2 w-full md:px-12 px-6'>
          <h1 className='text-6xl font-bold'>Have Questions?</h1>
          <p className='mt-12 text-xl'>Please feel free to call or email us,<br />or use our contact form to get in touch with us.<br />We look forward to hearing from you!</p>
          <p className='text-2xl font-semibold mt-12 mb-5'>Emergency? Call Us:</p>
          <a href="" className='text-xl'>+123 45 678 910</a>
          <p className='text-2xl font-semibold mt-12 mb-5'>Send Us Mail</p>
          <a href="" className='text-xl underline underline-offset-[5px]'>caresync@healthcare.com</a>
          <p className='text-2xl font-semibold mt-12 mb-5'>Find the Studio</p>
          <MapContainer attributionControl={false} center={[6.5965, 3.3421]} zoom={13} className='w-full h-96'>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.5965, 3.3421]}>
              <Popup>Na here i dey!!</Popup>
            </Marker>
          </MapContainer>
        </section>
        <section className='w-1/2 px-12 mt-8 md:mt-0'>
          <div className='bg-[#E2F3F5] px-20 pt-12 pb-9 shadow-xl'>
            <input type="text" className='text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey]' placeholder='Name' />
            <input type="text" className='text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7' placeholder='Email Address' />
            <input type="text" className='text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7' placeholder='Subject' />
            <textarea type="text" className='text-xl outline-0 min-h-36 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7' placeholder='Your Message' />
            <button className='bg-[#22D1EE] m-auto w-[80%]'>Send Message</button>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Contact