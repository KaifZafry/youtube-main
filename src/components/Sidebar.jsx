import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen= useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) {
        return null;
    }
 const topSidebar= ['Home', 'shorts', 'Subscriptions'];
 const you= ['Your Channel', 'Watch later', 'History', 'Your videos'];
 const Subscription=['Music', 'Sports', 'Gaming', 'Movies', 'Web Series'];
 const Explore=['Tremding', 'Shopping ','Live ','Film'];
  return (
    <div className='col-span-1 text-left p-2 top-0 fixed mt-20 bg-white-100'>
        
        <ul>
           { topSidebar.map((item,index)=> <li key={index}>{item}</li>)}
            
        </ul>

        <h1 className='font-bold my-4'>You</h1>
        <ul className="flex flex-col">
           {you.map((item,index)=> <li key={index}>{item}</li>)}
        </ul>
        <h1 className='font-bold my-4'>Subscription</h1>
        <ul>
        {Subscription.map((item,index)=> <li key={index}>{item}</li>)}
        </ul>
        <h1 className='font-bold my-4'>Explore</h1>
        <ul>
            
        {Explore.map((item,index)=> <li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Sidebar