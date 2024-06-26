import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
      <div className='shadow-lg shadow-black'>
        <Navbar />
      </div>
      <main className='max-w-7xl w-full'>
        <section className='w-1/2 px-12'>
          <h1 className='text-6xl font-bold'>Have Questions?</h1>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  )
}

export default Contact