import React from 'react'
import vector80 from '../../assets/Icons/vector80.svg'
import bankcard from '../../assets/Icons/bankcard.svg'
import stripe from '../../assets/Icons/stripe.svg'

const PatientPayment = () => {
    return (
        <div className=''>
            <div className='flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div className='px-[30px] mt-[4rem]'>
                  <h1 className='text-[1.25rem] font-bold text-[#000000]'>My saved methods</h1>
                  
           <div className=' bg-[#D9D9D9] w-[21rem] h-[6rem] mt-[1rem] rounded-[0.5rem] flex gap-[2rem]'>
            <div className='mt-[1.6rem] ml-[1rem]'>
           <img src={vector80} className="w-[2rem] h-[2rem] mt-[0.4rem]" alt="vector80"/>
           <h2 className='text-[0.9rem] font-bold text-[#000000] mb-[6rem]'>NGN</h2>
           </div>

<div className='mt-[0.5rem] ml-[1rem]'>
    <h2  className='text-[1.1rem]  text-[#000000]'>Online Bank Transfer</h2>
    <h2 className='text-[1.1rem] font-bold text-[#000000] '>08...23......2424</h2>
</div>

           </div>
           
           
           {/*THIS IS THE ALL PAYMENT METHODS PART */}
 <h1 className='text-[1.25rem] font-bold text-[#000000] mt-[4rem]'>All payment methods</h1>

<div className='flex flex-wrap justify-between mt-[2rem]'>

<div className='border border-gray-400 h-[10rem] w-[22rem] rounded-[0.5rem]'>
        <div className=' w-[21.6rem] border-b-2 border-b-gray-400 h-[4rem] mt-[1rem]  justify-center items-center flex gap-[1rem]'>
                <img src={vector80} className="w-[2rem] h-[2rem]" alt="vector80"/>
             <h2  className='text-[1.1rem]  text-[#000000]'>Online Bank Transfer</h2>
             <button className='bg-[#17B978] w-[6rem] h-[1.6rem] mt-[3px] rounded-[1rem]'><p className='text-white'>Most used</p></button>
           </div>

           <div className=' w-[20rem] h-[6rem] ml-[1rem] '>
           <h2 className='text-[1.1rem]  text-[#000000] '>Processing - Instant 30 minutes</h2>
           <h2 className='text-[1.1rem]  text-[#000000] '>Fee   0%</h2> 
           </div>


</div>


<div className='border border-gray-400 h-[10rem] w-[22rem] rounded-[0.5rem]'>
        <div className=' w-[21.6rem] border-b-2 border-b-gray-400 h-[4rem]  mt-[1rem]  items-center flex gap-[1.3rem]'>
                <img src={bankcard} className="w-[2rem] h-[2rem] ml-[1rem]" alt="bankcard"/>
             <h2  className='text-[1.1rem]  text-[#000000]'>Bank Card</h2>
           </div>

           <div className=' w-[20rem] h-[6rem] ml-[1rem] '>
           <h2 className='text-[1.1rem]  text-[#000000] '>Processing - Instant 30 minutes</h2>
           <h2 className='text-[1.1rem]  text-[#000000] '>Fee   2%</h2> 
           </div>




</div>


</div>

















<div className='flex flex-wrap justify-between mt-[2rem]'>

<div className='border border-gray-400 h-[10rem] w-[22rem] rounded-[0.5rem]'>
        <div className=' w-[21.6rem] border-b-2 border-b-gray-400 h-[4rem] mt-[1rem]   items-center flex gap-[1rem]'>
                <img src={stripe} className="ml-[0.9rem]" alt="stripe"/>
             <h2  className='text-[1.1rem]  text-[#000000]'>Stripe</h2>
           
           </div>

           <div className=' w-[20rem] h-[6rem] ml-[1rem] '>
           <h2 className='text-[1.1rem]  text-[#000000] '>Processing - Instant 30 minutes</h2>
           <h2 className='text-[1.1rem]  text-[#000000] '>Fee   5%</h2> 
           </div>


</div>


<div className='border border-gray-400 h-[10rem] w-[22rem] rounded-[0.5rem]'>
        <div className=' w-[21.6rem] border-b-2 border-b-gray-400 h-[4rem]  mt-[1rem]  items-center flex gap-[1.3rem]'>
                <img src={bankcard} className="w-[2rem] h-[2rem] ml-[1rem]" alt="bankcard"/>
             <h2  className='text-[1.1rem]  text-[#000000]'>Pay with Bank</h2>
           </div>

           <div className=' w-[20rem] h-[6rem] ml-[1rem] '>
           <h2 className='text-[1.1rem]  text-[#000000] '>Processing - 30 minutes</h2>
           <h2 className='text-[1.1rem]  text-[#000000] '>Fee   0%</h2> 
           </div>




</div>

</div>


                </div>
            </div>
        </div>
    )
}

export default PatientPayment