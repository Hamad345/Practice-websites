
import shoe from '../images/shoe.png'

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Example from './Example';

export default function Main() {
  const data2 = [
    { Order: '#7839928', Product: "Zenith Kicks", img1: shoe, Date: '31/01/2024',Price:'$75.00' ,Status:'Delivered'},
    { Order: '#7839928', Product: "Zenith Kicks", img1: shoe, Date: '31/01/2024',Price:'$75.00' ,Status:'Delivered' },
    { Order: '#7839928', Product: "Zenith Kicks", img1: shoe, Date: '31/01/2024',Price:'$75.00' ,Status:'Delivered' },
    { Order: '#7839928', Product: "Zenith Kicks", img1: shoe, Date: '31/01/2024',Price:'$75.00' ,Status:'Delivered' },
   
  ];
  const data1=[
    {name:"Examplename",email:"example@gmail.com", category:"Men",Address:'2601 Bank St, Ottawa,',Date:'31/02/2024', status:<button className='bg-[#34A853] text-white w-20 border h-7 rounded-2xl'>Accept</button>,status2:<button className='bg-[#FF0000] text-white w-20 border h-7 rounded-2xl'>Reject</button>},
    {name:"Examplename",email:"example@gmail.com", category:"Men",Address:'2601 Bank St, Ottawa,',Date:'31/02/2024', status:<button className='bg-[#34A853] text-white w-20 border h-7 rounded-2xl'>Accept</button>,status2:<button className='bg-[#FF0000] text-white w-20 border h-7 rounded-2xl'>Reject</button>},
    {name:"Examplename",email:"example@gmail.com", category:"Men",Address:'2601 Bank St, Ottawa,',Date:'31/02/2024', status:<button className='bg-[#34A853] text-white w-20 border h-7 rounded-2xl'>Accept</button>,status2:<button className='bg-[#FF0000] text-white w-20 border h-7 rounded-2xl'>Reject</button>},
    {name:"Examplename",email:"example@gmail.com", category:"Men",Address:'2601 Bank St, Ottawa,',Date:'31/02/2024', status:<button className='bg-[#34A853] text-white w-20 border h-7 rounded-2xl'>Accept</button>,status2:<button className='bg-[#FF0000] text-white w-20 border h-7 rounded-2xl'>Reject</button>},
    {name:"Examplename",email:"example@gmail.com", category:"Men",Address:'2601 Bank St, Ottawa,',Date:'31/02/2024', status:<button className='bg-[#34A853] text-white w-20 border h-7 rounded-2xl'>Accept</button>,status2:<button className='bg-[#FF0000] text-white w-20 border h-7 rounded-2xl'>Reject</button>},
  ];
  const data = [
    { name: 'Group A', value: 200 },
    { name: 'Group B', value: 800 },
    { name: 'Group C', value: 150 },
   
  ];
  const COLORS = ['#FFBF40', '#34A853', '#FF0000',];
   

  return (  
    <>
    <div className='flex ml-[230px] -mt-[1265px] gap-x-4'>
      {/* box start */}
        <div className='w-60 h-32 bg-[#F2F2F2] rounded-2xl'>
          <h1 className='font-medium ml-4 mt-3 font-[Poppins]'>Total Users</h1>
          <h1 className='font-bold text-2xl ml-4 mt-4 font-[Poppins]'>28901</h1>
          <h1 className='ml-4 mt-2 font-[Poppins]'>Last year</h1>
          <div className='inline-block ml-40 absolute -mt-20 w-[56px] border rounded-full bg-white h-[56px]'>
            <h1 className='text-[#34A853] text-lg ml-1 mt-3'>+106</h1>
          </div>
        </div>
        {/* box end */}
         {/* box start */}
         <div className='w-60 h-32 bg-[#F2F2F2] rounded-2xl'>
          <h1 className='font-medium ml-4 mt-3 font-[Poppins]'>Total Vendors</h1>
          <h1 className='font-bold text-2xl ml-4 mt-4 font-[Poppins]'>8390</h1>
          <h1 className='ml-4 mt-2 font-[Poppins]'>Last year</h1>
          <div className='inline-block ml-40 absolute -mt-20 w-[56px] border rounded-full bg-white h-[56px]'>
            <h1 className='text-[#34A853] text-lg ml-2 mt-3'>+56</h1>
          </div>
        </div>
        {/* box end */}
         {/* box start */}
         <div className='w-60 h-32 bg-[#F2F2F2] rounded-2xl'>
          <h1 className='font-medium ml-4 mt-3 font-[Poppins]'>Total Categories</h1>
          <h1 className='font-bold text-2xl ml-4 mt-4 font-[Poppins]'>16</h1>
          <h1 className='ml-4 mt-2 font-[Poppins]'>Last year</h1>
          {/* <div className='inline-block ml-40 absolute -mt-20 w-[56px] border rounded-full bg-white h-[56px]'>
            <h1 className='text-[#34A853] text-lg ml-1 mt-3'>+106</h1>
          </div> */}
        </div>
        {/* box end */}
         {/* box start */}
         <div className='w-60 h-32 bg-[#F2F2F2] rounded-2xl'>
          <h1 className='font-medium ml-4 mt-3 font-[Poppins]'>Total Orders</h1>
          <h1 className='font-bold text-2xl ml-4 mt-4 font-[Poppins]'>1356</h1>
          <h1 className='ml-4 mt-2 font-[Poppins]'>Last year</h1>
          <div className='inline-block ml-40 absolute -mt-20 w-[56px] border rounded-full bg-white h-[56px]'>
            <h1 className='text-[#34A853] text-lg ml-2 mt-3'>+36</h1>
          </div>
        </div>
        {/* box end */}
    </div>
      {/* div end */}
      {/* graphs */}
      <div className='flex gap-x-5'>
        <div className='bg-[#F2F2F2] ml-[230px] w-1/2 rounded-2xl h-80 mt-6 '></div>
        <div className='w-[350px] h-80  bg-[#F2F2F2] rounded-2xl mt-6'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-xl mt-2 ml-3 font-[Poppins]'>Visit customers</h1>
            <select className='bg-[#F2F2F2] mt-2 mr-2 rounded-[35px] border-[1px]'>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <Example/>
        </div>
      </div>
      {/* graphs ends */}
      <div className='flex gap-x-5 '>
        {/* table */}
        <div className='bg-[#F2F2F2] ml-[230px] w-1/2 rounded-2xl h-80 mt-6 '>
          <h1 className='font-bold text-xl mt-4 ml-5 font-[Poppins]'>Recent Orders</h1>
          <table className="table  mt-3 w-full  ">
      <thead className=''>
        <tr >
          <th className="p font-light text-sm font-[Poppins]">Order ID</th>
          <th className=" font-light text-sm font-[Poppins]">Product Name</th>
          <th className=" font-light text-sm font-[Poppins]">Date</th>
          <th className=" font-light text-sm font-[Poppins]">Price</th>
          <th className="font-light text-sm font-[Poppins]">Status</th>
        </tr>
      </thead>
   
        {data2.map((item) => (
          <tr key={item.name} className='' >
            <td className="pl-10 pt-  text-sm pt-5 font-[Poppins]">{item.Order}</td>
            
            <td className="pl-6 flex gap-x-2 text-sm mt-5  font-[Poppins]"><img className='' src={item.img1}></img>{item.Product}</td>

            <td className="pl-6 text-sm font-normal pt-5 font-[Poppins] ">{item.Date}</td>
            <td className="pl-3 text-sm pt-5 font-[Poppins]">{item.Price}</td>
            <td className="pl-8 text-sm pt-5 font-[Poppins]">{item.Status}</td>
          </tr>
        ))}
           
    </table>
    <button className='text-[12px] font-semibold absolute ml-72 mt-2 font-[Poppins]'>See all</button>


        </div>
        {/* table ends */}
        {/* another graph */}
        <div className='w-[350px] h-80 bg-[#F2F2F2] rounded-2xl mt-6'>
          <h1 className='font-bold ml-5 text-xl font-[Poppins]   mt-4'>Order</h1>
          <div className='flex'>
        <PieChart width={200} height={210}>
      <Pie
        data={data}
        cx={90}
        cy={120}
        innerRadius={55}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
       </PieChart>
        <ul style={{listStyleColor:''}} className='flex flex-col mt-12 ml-5 gap-y-4 w-28 text-sm list-disc  ' >
          <li className=' text-[#34A853] '> Complete orders 70%</li>
          <li className='text-[#FFBF40]'>  Pending orders  20%</li>
          <li className='text-[#FF0000] '>Cancel orders 10%</li>
        </ul>
       </div>

        </div>
      </div>
      {/* another graph ends */}
      {/* last table */}
      <div className='bg-[#F2F2F2] w-[1005px] h-[350px] border rounded-2xl ml-[230px] mt-10'>
         <div className='justify-between flex'>
        <h1 className='font-bold ml-5 text-xl font-[Poppins]   mt-4'>Shop requests</h1>
        <select className='bg-[#F2F2F2] mr-12 h-8 mt-4 border-2 rounded-lg w-14 font-[Poppins]'>
          <option>All</option>
        </select>
        </div>
        <table className='table-auto ml-8 mt-3  '>
           <thead >
            <tr className='flex gap-x-24 '>
              <th className='font-light font-[Poppins]'>Vendor name</th>
              <th className='font-light font-[Poppins] -ml-7'>Vendor email</th>
              <th className='font-light font-[Poppins] ml-3'>Category</th>
              <th className='font-light font-[Poppins] -ml-12'>Address</th>
              <th className='font-light font-[Poppins] ml-16'>Date</th>
              <th className='font-light font-[Poppins] ml-1'>Status</th>

            </tr>
           </thead>
           <tbody>
            {data1.map((Item)=>(
              <tr key={Item.name} className='flex gap-x-[58px] mt-2'>
                <td className='font-bold font-[Poppins] mt-3'>{Item.name}</td>
                <td className='font-bold font-[Poppins] mt-3'>{Item.email}</td>
                <td className='font-bold font-[Poppins] mt-3 -ml-2'>{Item.category}</td>
                <td className='font-bold font-[Poppins] mt-3 ml-4 whitespace-nowrap'>{Item.Address}</td>
                <td className='font-bold font-[Poppins] mt-3 ml-'>{Item.Date}</td>
                <td className='font-bold font-[Poppins] mt-2 flex -ml-4 gap-x-2'>{Item.status}{Item.status2}</td>
              
            
                

              </tr>
            ))}

           </tbody>
        </table>



      </div>
      {/* last table */}
    </>
  )
}
