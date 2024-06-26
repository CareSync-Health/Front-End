import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
      <div className='shadow-lg shadow-[grey]'>
        <Navbar />
      </div>
      <main className='max-w-7xl w-full mt-12'>
        <section className='w-1/2 px-12'>
          <h1 className='text-6xl font-bold'>Have Questions?</h1>
          <p className='mt-12 text-xl'>Please feel free to call or email us,<br/>or use our contact form to get in touch with us.<br/>We look forward to hearing from you!</p>
          <p className='text-2xl font-semibold mt-12 mb-5'>Emergency? Call Us:</p>
          <a href="" className='text-xl'>+123 45 678 910</a>
          <p className='text-2xl font-semibold mt-12 mb-5'>Send Us Mail</p>
          <a href="" className=''>caresync@healthcare.com</a>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default Contact