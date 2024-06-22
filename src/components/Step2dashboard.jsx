import React from 'react'

const Step2dashboard = () => {
  return (
    <div className=''>
      <div className=''>
        <p className='text-[#262626] text-[14px] font-bold pb-3'>Orders</p>
        <img src="svg2.svg" alt="" />
        <p className='text-[#262626] text-[14px] '>Pending Orders:<span className='text-[#ebe851] font-bold text-[16px]'> 20 </span> </p>
        <p className='text-[#262626] text-[14px]'>Reconcilled Orders:<span className='text-[#c48347] font-bold text-[16px]'> 80</span> </p>
        <p className='text-[#262626] text-[14px]'>Total Orders:<span className='text-[#564dd1] font-bold text-[16px]'> 100</span> </p>
      </div>

      <div className='mt-5'>
        <p className='text-[#262626] text-[14px] font-bold pb-3'>Payments</p>
        <img src="svg2.svg" alt="" />
        <p  className='text-[#262626] text-[14px]'>Un-reconcilled Payments: <span className='text-[#ebe851] font-bold text-[16px]'> 20 </span></p>
        <p  className='text-[#262626] text-[14px]'>Reconcilled Payments: <span className='text-[#c48347] font-bold text-[16px]'> 80 </span></p>
        <p  className='text-[#262626] text-[14px]'>Total Payments: <span className='text-[#564dd1] font-bold text-[16px]'> 100</span></p>
      </div>
    </div>

  )
}

export default Step2dashboard