import React from 'react'



const VideoCard = ({info}) => {
     console.log(info)
    const {snippet, statistics}= info;
    const{channelTitle, thumbnails, title}=snippet;
    const {viewCount}= statistics;
    let displayCount;

  if (viewCount >= 1000000) {
    displayCount = (viewCount / 1000000).toFixed(1) + 'M';
  } else if (viewCount >= 1000) {
    displayCount = (viewCount / 1000).toFixed(0) + 'K';
  } else {
    displayCount = viewCount;
  }
  return (
    <div className='text-left w-80 shadow-sm my-2'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="video_img" />
        <p className='font-bold'>{title}</p>
        <p className='mt-1'>{channelTitle}</p>
        <p className='mt-1'>{displayCount} Views</p> 
   
    </div>
  )
}

export default VideoCard