
import Step2dashboard from "./Step2dashboard";
import React, { useState } from 'react'

const Body = () => {
        const [open, setOpen] = useState(false)

        const showDropDown = () => {
          setOpen(!open)
        }
  return (
              <div className="">
                  <div className="grid grid-cols-3 gap-3 w-full ">
                <div className="col-span-2">
                  <div className="flex  w-full items-center justify-between pt-14 pb-6 ">
                    <p className=" text-[#5a5c69] font-bold pl-5">Today: 5,Aug 2024</p>

                    <p className="text-[#5a5c69] text-[13px]">1 Jan - 1 Jun</p>
                </div>
                  <div className="flex items-center pb-8">
                    <span className="pl-[20px] font-semibold ">Jan</span>
                    <span className="pl-[80px] font-semibold ">Feb</span>
                    <span className="pl-[70px] font-semibold ">Mar</span>
                    <span className="pl-[74px] font-semibold">Apr</span>
                    <span className="pl-[74px] font-semibold">May</span>
                    <span className="pl-[100px] font-semibold">Jun</span>
                  </div>
                  <div className=" flex w-full h-full">
                  
                    <img src="graph.svg" alt=""  /> 
                  </div>
                </div>

                <div className="col-span-1 mt-14">
                  <Step2dashboard />
                </div>
              </div>


              {/* Table */}
             
                <div >
            
                  <p className="mt-20 pl-5 text-lg text-[#262626] font-medium">Payments</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 my-3 items-center">
                <p className="text-[#262626] text-[14px] font-medium">showing</p>
                <span className="text-[#6383da] text-[14px] font-medium">20</span>
                <img src="arrowdown.svg" alt="" className="text-[#262626]" />
                <p className="mr-6 text-[#262626] text-[14px] font-medium">out of 500 payments </p>
              <div className="flex items-center gap-1 border-b border-[#262626]"> 
                <img src="searchbutton.svg"  alt="" className="text-[#5a5c69] text-[14px] " />
                <p className="text-[#5a5c69] text-[14px] " >search payments</p>
                </div>
                </div>

              <div>
                <p className="text-[15px] text-[#262626] font-medium mr-40" onClick={showDropDown}>show</p>

                {
                  open &&
                  <div className="bg-white h-[120px] w-[150px] mr-20 text-[14px] absolute  z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]  ">
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '>All</p>
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '> All</p>
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '> reconcilled</p>
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '> Un-reconcilled</p>
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '> Settled</p>
                  <p className='cursor-pointer hover:text-[blue]  text-[#5a5c69] '> Unsettled</p>
                  </div>
                }
              </div>
             </div>

                  <table className=" w-full ">
              <tr>
              <div  className=" flex items-center justify-between border hover:border-[#9147d6] ml-6 "> 
                  <div className="pb-2">Item Type 
                    <div className="ml-5"> 
                    <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-5">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-5">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-5">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-5">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-5">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-4">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>

                  <div className="flex items-center gap-2"> 
                   <p className=" bg-[#56648d] text-[14px] text-white  p-2.5 rounded-full ">vw</p>
                  <p className="text-[14px] text-[#5a5c69] pr-2 py-4">Apply Mac Book 15"250 SSD 12GB </p>
                  </div>
                </div>
              </div>  

                  <div className="pt-2 ml-20">Price 
                  <div className="">  
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">#73430</p>
                  </div>
                 </div>
                 

                  <div className="pt-2">Transaction No
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  <p  className=" text-[14px] text-[#5a5c69] py-5">1234567890</p>
                  </div>
                  
                  <div className="pt-2  ">Time
                  <p className=" text-[14px] text-[#5a5c69] py-5" >12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5" >12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5" >12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5" >12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5" >12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">12:30</p>
                  <p className=" text-[14px] text-[#5a5c69] py-5">12:30</p>
                  </div>  
                  
                <div className="mr-10   ">
                  
                <div className="text-[14px]  my-8 text-[#5a5c69] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#cac4ca] ps-1.5 text-[#cac4ca] rounded-full ">0</span> Un-reconcilled 
             </div>

                  
                 <div className="text-[14px] my-9 text-[#ebc315] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#ebc315] ps-1.5 rounded-full ">0</span> Pending 
               </div>
             
                  <div className="text-[14px] my-5 text-[#5a5c69] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#5a5c69] ps-1.5 text-[#5a5c69] rounded-full ">0</span> reconcilled 
                </div>
               
                
                <div className="text-[14px] my-9 text-[#5a5c69] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#5a5c69] ps-1.5 text-[#5a5c69] rounded-full ">0</span> reconcilled 
                </div>
             
             
                <div className="text-[14px] my-7 text-[#ebc315] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#ebc315] ps-1.5 rounded-full ">0</span> Pending
               </div>
               

              
                <div className="text-[14px] mt-9 text-[#5a5c69] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#cac4ca] ps-1.5 text-[#cac4ca] rounded-full ">0</span> Un-reconcilled 
                </div>
               

              


                <div className="text-[14px] mt-9 text-[#5a5c69] border-[2px] underline rounded-[17px] px-2 hover:border-[#3d3c94] hover:decoration-[#3d3c94]"> <span className="bg-[#5a5c69] ps-1.5 text-[#5a5c69] rounded-full ">0</span> reconcilled 
                </div>
              
              </div>
             
              </div>
               </tr>
            </table>
           </div>   
         </div>
            );
          };

          export default Body;
