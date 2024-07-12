import React from 'react'
import { Link } from 'react-router-dom'
import overview from '../images/overview.png'
import men from '../images/men.png'



export default function Profile() {
  return (
    <>
    <div className='flex'>
        <div className='fixed'>
    <div className='bg-[#E6E6EB] w-52 h-[750px]  flex flex-col  '>
       <div className='fixed'>
       <Link to="/DashBoard"><button className='flex ml-5 gap-x-6 w-40  h-12 pt-3 border rounded-xl text-md font-[Poppins]  font-medium mt-40 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 '><img src={overview}></img></span>Overview</button></Link>
       <Link to='/UserManage'><button className='flex ml-5 pl- gap-x-2 w-40  h-12  border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3 '><img src={overview}></img></span>User management </button></Link>
       <Link to='/CategoryManage'><button className='flex ml-5 gap-x- w-40 h-12   border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3'><img src={overview}></img></span>Category management</button>   </Link>
       </div>
      </div>
      </div>

      {/* one div ends */}

      <div>
        {/* another div */}
        <div className='ml-60'>
            <h1 className='mt-5 text-3xl font-[Poppins]  font-bold'>Profile</h1>
            <div className='flex gap-x-4 '>
            <img src={men} alt="" className='mt-10 h-20 w-20 object-cover border-4 border-[#2A2E5B] rounded-full cursor-pointer'/> 
            <div className='mt-14 flex flex-col -gap-y-1 '>
              <h1 className='font-[Poppins] text-xl font-bold'>Name</h1>
              <h1 className='font-[Poppins]  font-normal'>Email234@gmail.com</h1>
            </div>
           
            </div>
             {/* inputs div */}
             <div className='flex flex-nowrap'>
             <div>
             <div className='mt-6 flex flex-col gap-y-3'>
             <div className='flex gap-x-10'>
             <h1 className='font-[Poppins]  font-light'>First name*</h1><span className='font-[Poppins] font-bold text-lg'>Nameexample</span>
             </div>
             <div className='flex gap-x-10'>
             <h1 className='font-[Poppins]  font-light'>Last name *</h1><span className='font-[Poppins] font-bold text-lg'>Nameexample</span>
             </div>
             <div className='flex gap-x-20'>
             <h1 className='font-[Poppins]  font-light'>Email</h1><span className='font-[Poppins] font-bold text-lg'>email345@gmail.com</span>
             </div>
             <hr className='text-5xl w-[600px] '></hr>
             <div className='flex gap-x-14'>
             <h1 className='font-[Poppins]  font-light'>Password</h1><span className='font-[Poppins] font-bold text-lg text-[#0A9E19]'>Change Password</span>
             </div>
             {/* input div main */}
            </div>
            </div>
            <div className='flex flex-col gap-y-3 mt-5 -ml-52'>
            <div className='flex gap-x-14'>
             <h1 className='font-[Poppins]  font-light'>Phone no*</h1><span className='font-[Poppins] font-bold text-lg '>00000000</span>
             </div>
             <div className='flex gap-x-14'>
             <h1 className='font-[Poppins]  font-light'>Address</h1><span className='font-[Poppins] font-bold text-lg whitespace-nowrap '>Address, city, ...***</span>
             </div>
            </div>
            </div>
            
        </div>
        
      </div>

    </div>
      
    </>
  )
}
