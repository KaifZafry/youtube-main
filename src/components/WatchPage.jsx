
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";
import { API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState({});
  const [subscribed, setSubscribed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoInfo();
  }, []);

  const fetchVideoInfo = () => {
    const videoId = searchParams.get("v");
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setVideoInfo(data.items[0]))
      .catch(error => console.error('Error fetching video info:', error));
    console.log(videoInfo)
  };
  const toggleSubscription = () => {
    setSubscribed(!subscribed);
  };
 
  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }
  const handleReadmore = () => {
setIsExpanded(!isExpanded); 
  }

  return (
    <div className="flex flex-col w-full box-border ">
      <div className="flex w-[98vw]">
        <div className="w-full mt-20 mx-2">
          <iframe
            className="w-full md:w-[800px] h-auto md:h-[450px] "
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="text-left font-bold text-2xl my-4">{videoInfo.snippet?.title}</div>
          <div className="flex items-center justify-between">
            
            <button className="text-left bg-zinc-200 p-2 px-4 rounded-lg">{videoInfo.snippet?.channelTitle}</button>
            <button className="bg-black text-white p-1 px-4 rounded-lg flex items-center gap-1"
              style={{ backgroundColor: subscribed ? "gray" : "black" }}
              onClick={() => toggleSubscription()}
              >{subscribed ? "Subscribed" : "Subscribe"}</button>
            {console.log(videoInfo)}
            <div className="flex">
                
                <div className="like flex bg-zinc-200 rounded-xl">
                  <span className="flex items-center border-r-2 mx-1 px-2 border-gray-600 my-2"><img onClick={incrementCount} src="/like.png" alt="" className="w-8 mx-2" />{count}</span>
                  <span className="flex items-center px-2"><img onClick={decrementCount} src="/dislike.png" alt="" className="w-8" /></span>
                </div>
              
              <button className="bg-slate-100  p-1 px-4 rounded-lg mx-2 flex items-center gap-1"><img src="/share.png" className="w-4" alt="" /> <span>share</span></button>   
              <button className="bg-slate-100  p-1 px-4 rounded-lg flex items-center gap-1"><img src="/download.png" className="w-4" alt=""/> <span>Download</span></button>
            </div>
          </div>

          <div className="bg-slate-100 m-4 p-2 rounded text-left">
            <h2 className="text-black text-xl">Description</h2>
            <span className="text-sm my-2 text-left ">{isExpanded ? videoInfo.snippet?.description : videoInfo.snippet?.description.split('\n').slice(0,3) }</span>
            <span className="text-blue-700 cursor-pointer" onClick={handleReadmore}>{isExpanded ? "Read less" : "Read More..."}</span>
          </div>

        </div>

        <div className="w-full mr-2 mt-6 hidden md:block">
          <LiveChatContainer />
        </div>
      </div>

      <div className="w-full md:w-[59%]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;