import React from 'react'
import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const MainBody = () => {
  return (
    <div className='grid grid-flow-col relative'>
        <div className='col-span-1' ><Sidebar/></div>
        <Outlet/>
    </div>
  )
}

export default MainBody