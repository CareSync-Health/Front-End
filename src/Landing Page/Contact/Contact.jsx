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
          <p>Please feel free to call or email us,<br/>
or use our contact form to get in touch with us.
We look forward to hearing from you!</p>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default Contact