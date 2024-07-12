import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import person from "../images/person.png"
import overview from '../images/overview.png'
import { Link,useNavigate } from 'react-router-dom';
import men from '../images/men.png'
import women from '../images/women.png'
import bag from '../images/bag.png'
import accessories from '../images/accessories.png'
import Pop from './Pop';





export default function Suits() {
  const[openModal,setOpenModal]=useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    navigate(event.target.value); 
  };
  
  return (
    <>
     {/* parentdiv */}
     <div className='flex  '>
      <div className='bg-[#E6E6EB] w-52 h-[950px] '>
       <div className='fixed'>
       <Link to="/DashBoard"><button className='flex ml-5 gap-x-6 w-40  h-12 pt-3 border rounded-xl text-md font-[Poppins]  font-medium mt-40 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 '><img src={overview}></img></span>Overview</button></Link>
       <Link to='/UserManage'><button className='flex ml-5 pl- gap-x-2 w-40  h-12  border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3 '><img src={overview}></img></span>User management </button></Link>
       <Link to='/CategoryManage'><button className='flex ml-5 gap-x- w-40 h-12   border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3'><img src={overview}></img></span>Category management</button>   </Link>
       </div>
      </div>
      <nav className='flex mt-3'> 
       <h1 className='text-4xl font-bold font-[Poppins] mt-3 whitespace-nowrap ml-6'>Category management</h1>
      
       <img src={person} className='w-10 h-10 border rounded-full mt-3 ml-[470px]' ></img>
       <h1 className='font-[Poppins] text-xl font-semibold mt-4 ml-3'>John Smith</h1>
      </nav>
    {/* parentdiv ends */}
   </div>
   {/* main start */}
   <div className='bg-[#F2F2F2] ml-[230px] -mt-[830px] w-[1000px] border rounded-[35px] h-[750px]'>
    {/* nav inside */}
    <div className='flex '>
    <h1 className='mt-4 font-[Poppins] font-bold text-2xl ml-8'> Suits</h1>


    <input type="text" placeholder=" Search" className="h-9 mt-3 border  rounded-3xl pl-7 ml-24 placeholder:-pl-2 placeholder:font-normal placeholder:text-black placeholder:font-[Poppins]"  /><span className="absolute ml-[185px] text-black text-xl mt-5 font-bold "><IoIosSearch/></span>
    <button  className='font-[Poppins] text-white bg-black ml-[375px] h-9 mt-3 border  rounded-3xl w-40' onClick={()=>{setOpenModal(true)}}>Add new product</button>
     {openModal?<Pop/> : ''}
    </div>

    {/* nav inside ends */}
    <div className=' '>
      <div className='flex ml-8 gap-x-7'> 
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={men} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-12 text-extrabold bg-[#FFFFFF] text-[12px] h-6 ' >Jeans</button></div>
     <div className='bg-[red] w-52 h-52 mt-5 border rounded-[35px]'><img src={women} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-14 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Suits</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={bag} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-12 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Jacket</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={accessories} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-20 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Tie</button></div>
     </div>
     <div className='flex ml-8 gap-x-7  '>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={bag} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-12 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Bags</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={accessories} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-20 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Sportswear</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={accessories} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-20 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Sportswear</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={accessories} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-20 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Hoodie</button></div>
     </div>
     {/* 3rd row */}
     <div className='flex ml-8 gap-x-7  '>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={bag} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-12 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Bags</button></div>
     <div className='bg-[red] w-52 h-52  mt-5 border rounded-[35px]'><img src={accessories} alt='' /><button className='border rounded-[35px] absolute ml-5 -mt-10 w-20 text-extrabold bg-[#FFFFFF] text-[12px] h-6 '>Sportswear</button></div>
     </div>
     </div>
     
       
    

   </div>
    </>
  )
}
