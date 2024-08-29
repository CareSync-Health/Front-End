import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { config } from '@/Redux/Config';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const url = config.liveUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = { name, email, subject, message };

    try {
      const response = await axios.post(`${url}/contact`, body);
      if (response.data.success) {
        toast.success(response.data.message);
        
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="shadow-lg shadow-[grey]">
        <Navbar />
      </div>
      <main className="max-w-7xl w-full mt-12 flex flex-wrap items-center">
        <section className="lg:w-1/2 w-full lg:px-12 px-6">
          <h1 className="text-6xl font-bold">Have Questions?</h1>
          <p className="mt-12 text-xl">
            Please feel free to call or email us,
            <br />
            or use our contact form to get in touch with us.
            <br />
            We look forward to hearing from you!
          </p>
          <p className="text-2xl font-semibold mt-12 mb-5">Emergency? Call Us:</p>
          <a href="tel:+12345678910" className="text-xl">
            +123 45 678 910
          </a>
          <p className="text-2xl font-semibold mt-12 mb-5">Send Us Mail</p>
          <a href="mailto:contact@caresyncmed.com" className="text-xl underline underline-offset-[5px]">
            contact@caresyncmed.com
          </a>
          {/* MapContainer section commented out */}
          {/* <p className='text-2xl font-semibold mt-12 mb-5'>Find the Studio</p>
          <MapContainer attributionControl={false} center={[6.5965, 3.3421]} zoom={13} className='w-full h-96'>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.5965, 3.3421]}>
              <Popup>Na here i dey!!</Popup>
            </Marker>
          </MapContainer> */}
        </section>
        <section className="lg:w-1/2 w-full lg:px-12 px-6 mt-8 lg:mt-0">
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <div className="bg-[#E2F3F5] lg:px-20 px-5 pt-12 pb-9 shadow-xl">
              <input
                type="text"
                className="text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey]"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="text-xl outline-0 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                className="text-xl outline-0 min-h-36 font-[100] px-5 py-3 rounded-md border w-full border-[grey] mt-7"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#22D1EE] block m-auto w-[80%] mt-7 py-3 text-white text-lg rounded-lg"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;