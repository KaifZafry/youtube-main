import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'


const Maincontainer = () => {
  return (
    <div className='col-span-11 mt-20'>
      <ButtonList />
       <VideoContainer/>
    </div>
  )
}

export default Maincontainer