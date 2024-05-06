import React from 'react'

const VideoTitle = ({info}) => {
 // console.log(info?.snippet?.title)
 console.log(info?.snippet?.title)
  return (
    <div>
        <div className="title font-extrabold text-3xl text-start ">
            <h1>{}</h1>
        </div>
    </div>
  )
}

export default VideoTitle