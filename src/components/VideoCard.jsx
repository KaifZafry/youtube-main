import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet, statistics}= info;
    const{channelTitle, thumbnails, title}=snippet;
  return (
    <div className='text-left w-80 shadow-sm my-2'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="video_img" />
        <p className='font-bold'>{title}</p>
        <p className='mt-1'>{channelTitle}</p>
        <p className='mt-1'>{statistics.viewCount} Views</p>
    </div>
  )
}

export default VideoCard