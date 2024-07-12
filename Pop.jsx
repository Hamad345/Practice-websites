import React from 'react'

export default function Pop() {
  return (
    <>
    <div className='bg-[#3C3C3D]    w-full h-screen flex justify-center content-center '>
        <div className='bg-white min-h-96 mt-2 w-2/5 border rounded-[30px]  '>
            <div className='mx-6 mt-6'>
            <h1 className='font-[Poppins] font-bold text-xl'>Add new product</h1>
            <div className='flex w-full min-h-44 gap-x-5'>
                <div className='w-1/2 flex flex-col gap-y-3  mt-3'>
                    <h1 className='font-[Poppins] font-light text-sm'>Product name</h1>
                    <input type='text' placeholder='Add name' className='placeholder:-pl-3 -mt-2 placeholder:text-grey placeholder:font-extralight pl-3 font-[Poppins] placeholder:text-sm min-h-7 bg-[#F6F6F6] w-full border rounded-lg h-'/>
                    <h1 className='font-[Poppins] font-light text-sm'>Price</h1>
                    <input type='text' placeholder='Add price' className='placeholder:-pl-3 -mt-2 placeholder:text-grey placeholder:font-extralight pl-3 font-[Poppins] placeholder:text-sm min-h-7 bg-[#F6F6F6] w-full border rounded-lg h-'/>
                    <h1 className='font-[Poppins] font-light text-sm'>Availability</h1>
                    <select className=' font-[Poppins] min-h-7 bg-[#F6F6F6] w-full border rounded-lg -mt-2 text-sm font-extralight'>
                        <option className='font-[Poppins] font-light text-sm font-semibold -mt-4'>Available to all users</option>
                    </select>
                    <h1 className='font-[Poppins] font-light text-sm'>Availability</h1>
                    <button class="-mt-2  w-32 h-20  border rounded-xl bg-[#F6F6F6] border-gray-300 hover:bg-gray-100 focus:outline-none">
                     <span><input type='file' className='h-2 w-2'></input></span>
                    </button>
                    
                
                </div>
                <div className='w-1/2  min-h-44 mt-3 flex flex-col gap-y-3'>
                <h1 className='font-[Poppins] font-light text-sm'>Category</h1>
                    <input type='text' placeholder='Add name' className='placeholder:-pl-3 -mt-2 placeholder:text-grey placeholder:font-extralight pl-3 font-[Poppins] placeholder:text-sm min-h-7 bg-[#F6F6F6] w-full border rounded-lg h-'/>
                    <h1 className='font-[Poppins] font-light text-sm'>Quantity</h1>
                    <select className='border font-[Poppins] bg-[#F6F6F6] w-full border rounded-lg min-h-7 -mt-2'>
                        <option>stock</option>
                    </select>
            </div>

            </div>
            <h1 className='font-[Poppins] font-light text-sm  mt-3'>Description</h1>
            <textarea  placeholder="   Describe about your product "  className='bg-[#F6F6F6]  text-sm font-[Poppins] h-14 border rounded-2xl w-[460px]   mt-1'></textarea>
            <button className='font-[Poppins] text-white text-sm bg-black  h-9 mt-1 border  rounded-3xl w-36'>Add new product</button>



           
            </div>
            
        </div>
       
    </div>
      
    </>
  )
}
