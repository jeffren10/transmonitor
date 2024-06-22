import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex '>


      <div className='flex  mt-[20px]  w-full'>

        <div className=' px-[25px] ml-7 hover:border-[#9149d6] border '>
          <p className='ml-1  text-[#5a5c69] text-[13px] '>Main</p>
          <div className=' flex items-center text-[11px] mt-3 gap-2 bg-[#cacacc] border-spacing-5'>
           
            <img src='side1.svg' alt='' />

            <p className='text-[11px] text-[#5a5c69]'>
              Overview
            </p>
          </div>
          <p className='mt-7 text-[#5a5c69] text-[13px]'>
            Payments
          </p>
          <div className=' flex items-center text-[11px] mt-3 gap-2'>
            
            <img src='side2.svg' alt='' />

            <p className='text-[#5a5c69] text-[11px]'>
              All Payment
            </p>
          </div>
          <div className=' flex items-center text-[11px] mt-3 gap-2'>
          
          <img src='side3.svg' alt='' />

            <p className='text-[#5a5c69] text-[11px]'>
              Reconcilled Payments
            </p>
          </div>
          <div className=' flex items-center text-[11px] mt-3 gap-2'>
           
          <img src='side4.svg' alt='' />

            <p className='text-[#5a5c69] text-[11px]  '>
              Un-Reconcilled Payments
            </p>
          </div>
          <div>
            <div className=' flex items-center text-[11px] mt-3 gap-2'>
           
            <img src='side5.svg' alt='' />

              <p className='text-[#5a5c69] text-[11px] '>
                Manual Settlement
              </p>
            </div>
          </div>
          <div>
            <p className='ml-1 mt-5 text-[#5a5c69] text-[13px]'>
              Order
            </p>

            <div className=' flex items-center text-[11px] mt-3 gap-2'>
              
            <img src='side6.svg' alt='' />

              <p className='text-[#5a5c69] text-[11px]'>
                All order
              </p>
            </div>
            <div className=' flex items-center text-[11px] mt-3 gap-2'>
             
             <img src='side7.svg' alt='' />

              <p className='text-[#5a5c69] text-[11px]'>
                Depending Order
              </p>
            </div>
            <div className=' flex items-center text-[11px] mt-3 gap-2 '>
             
            <img src='side8.svg' alt='' />


              <p className='text-[#5a5c69] text-[11px]'>
                Reconcilled Order
              </p>
            </div>
            <div className='flex items-center ml-1 mt-5 text-[#5a5c69] text-[13px] pb-5'>
             
            <img src='side9.svg' alt='' />

              <p className='text-[#5a5c69] text-[11px] ml-4 '>
                Merchant Profile
              </p>
            </div>
          </div>
        </div>
      




      {/* body */}
      </div>

    </div>






  )
}

export default Sidebar