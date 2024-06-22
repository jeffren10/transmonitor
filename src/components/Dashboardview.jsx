      import React from 'react'
      import profile from '../assets/profile.png.webp'

      const Dashboardview = () => {
        return (
          <div> 
          <div className='flex items-center justify-between border mt-[12px] hover:border-[#9147d6]'>
            <div className='flex items-center'>
            <h2 className='font-bold text-[#9147d6] ml-9 mr-16'>TransMonitor</h2>

             <img src="searchbutton.svg"  alt='' />

            <div>
              <input type ='text' placeholder='Search' className='ml-1 bg-[#f8f9fc] outline-none'/>
            </div>
          </div>
        
            <div className='flex items-center gap-[25px] pr-[25px] ml-6'>
              <div className='text-[#5a5c69] text-[15px]'>Support</div>
              <div className='text-[#5a5c69] text-[15px]'>FAQ</div>

            <img src='noticebell.svg' alt=''/>

              <div className=''>
              <p className='text-[11px] text-[#5a5c69]'> hello</p>
              <p className=' text-[15px] text-[#5a5c69]'>Tolani Ojo</p>
            </div>
            <div>
              <img src={profile} alt='profile.png.webp' className='w-[40px] rounded-full ml-1'></img>
            </div>
          </div>
          </div>


              <button className='text-[15px] ml-10 mt-7 font-semibold bg-green-500 text-white py-1 px-4 rounded-[40px] border-[3px] hover:border-[#9149d6]'>GENERATE INVOICE</button>
    

              <div className='grid grid-cols-4  pt-[0px] px-[25px] ml-[200px] mt-[20px] gap-[100px] '>
              <div className='border hover:border-[#9149d6] py-[10px] pl-[10px]'>
              <div className='flex items-center gap-1  '>
              <p className='text-[#5a5c69] text-[11px]'>
              Daily Transaction Volume 
              </p>
                <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
                </svg>
                
              </div>
              <p  className='text-[#5a5c69] font-semibold'> 
                2,342
              </p> 
              </div>

              <div className='border hover:border-[#9149d6] py-[10px] pl-[10px]' >
              <div className='flex items-center gap-1'>
              <p className='text-[#5a5c69] text-[11px]'>
              Daily Transaction Volume 
              </p>
                <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
                </svg>
              </div>
              <p  className='text-[#5a5c69] font-semibold '>
                4,000,000
              </p> 
              </div>

              <div  className='border hover:border-[#9149d6] py-[10px] pl-[10px] '>
              <div className='flex items-center gap-1'>
              <p className='text-[#5a5c69] text-[11px]'>
              Daily Transaction Volume 
              </p>
                <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
                </svg>
              </div>
              <p  className='text-[#5a5c69] font-semibold '>
                  452,000
                </p> 
              </div>

              <div  className='border hover:border-[#9149d6] py-[10px] pl-[10px]'>
              <div className='flex items-center gap-1'>
              <p className='text-[#5a5c69] text-[11px]'>
              Daily Transaction Volume 
              </p>
                <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
                </svg>
              </div>
              <p className='text-[#5a5c69] font-semibold'> 
                4,000,000
              </p>
              </div>
              </div>

          
            </div>
           
      )
      }

      export default Dashboardview