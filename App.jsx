// import React from 'react'
// import DashBoard from './assets/Dashboard/DashBoard.jsx'
// import UserManage from './assets/Dashboard/UserManage.jsx'
// import CategoryManage from './assets/Dashboard/CategoryManage.jsx'
// import CategoryMen from './assets/Dashboard/CategoryMen.jsx'
// import CategoryCloths from './assets/Dashboard/CategoryCloths.jsx'
// import { Routes,Route } from 'react-router-dom'
// import Profile from './assets/Dashboard/Profile.jsx'
import Anees from './assets/Dashboard/Anees.jsx'
import Ali from './assets/Dashboard/Ali.jsx'
import { Route, Routes } from 'react-router'
  
  import LOGin from './assets/Dashboard/LOGin.jsx'
export default function App() {
  return (
    <>
    {/* < Profile />
  <CategoryCloths/>  */}
   {/* < DashBoard/> */}
   {/* < CategoryMen/>
   <CategoryManage />
   < UserManage />   */}
   {/* <Anees/> */}
   {/* <LOGin/> */}
   < Ali/>
  
   <Routes>
   <Route path='/ALi' element={< Ali />}/>
   <Route path='/LOGin' element={ <LOGin/>}/>
   </Routes>
   
  {/* <Routes>
  <Route path='/Profile' element={< Profile />}/>
  <Route path='/DashBoard' element={< DashBoard />}/>
  <Route path='/CategoryCloths' element={< CategoryCloths />}/>
  <Route path='/UserManage' element={< UserManage />}/>
  <Route path="/CategoryManage" element={< CategoryManage /> }/>
  <Route path="/CategoryMen" element={< CategoryMen  /> }/>
  </Routes> */}
 

    </>
  )
}
