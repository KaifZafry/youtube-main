import React from 'react'
import Sidebar from './Sidebar'
// import Maincontainer from './Maincontainer'
import { Link, Outlet } from 'react-router-dom'

const MainBody = () => {
  return (
    <div className='grid grid-flow-col relative'>
        <Link className='col-span-1' to={'/'} ><Sidebar/></Link>
        <Outlet/>
    </div>
  )
}

export default MainBody