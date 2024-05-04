import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos)
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex">
      <div className="w-1/12"></div>
      <div className="flex justify-evenly flex-wrap w-11/12 ">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
           
          </Link>
        
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
