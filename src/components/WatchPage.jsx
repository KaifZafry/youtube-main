// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";
// import LiveChatContainer from "./LiveChatContainer";


// const WatchPage = () => {
//   const [searchParams] = useSearchParams();
//   console.log(searchParams)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);

//   return (
//     <div className="flex flex-col w-full box-border ">
//       <div className="flex w-[98vw]">
//         <div className="w-full mt-14 mx-2">
//           <iframe
//             className=""
//             width="800"
//             height="450"
//             src={"https://www.youtube.com/embed/" + searchParams.get("v")}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>

//           <div className="text-left font-bold text-2xl my-4">video title</div>
//         </div>

//         <div className="w-full mr-2">
//           <LiveChatContainer />
//         </div>
//       </div>

//       <div className="w-2/3">
//         <CommentsContainer />
//       </div>
//     </div>
//   );
// };

// export default WatchPage;


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

  return (
    <div className="flex flex-col w-full box-border ">
      <div className="flex w-[98vw]">
        <div className="w-full mt-14 mx-2">
          <iframe
            className=""
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="text-left font-bold text-2xl my-4">{videoInfo.snippet?.title}</div>
          <div className="flex items-center justify-between">
            
            <h2 className="text-left bg-zinc-200 p-2 px-4 rounded-lg">{videoInfo.snippet?.channelTitle}</h2>
            
            <div>
            <button className="bg-slate-100  p-1 px-4 rounded-lg mx-2">Join</button>
              <button className="bg-black text-white p-1 px-4 rounded-lg">Subscribe</button>
              <button className="bg-slate-100  p-1 px-4 rounded-lg mx-2">Share</button>
              <button className="bg-slate-100  p-1 px-4 rounded-lg">Download</button>
            </div>
          </div>

          <div className="bg-slate-100 m-4 p-2 rounded">
            <p className="text-sm my-2 text-left ">{videoInfo.snippet?.description}</p>
          </div>

        </div>

        <div className="w-full mr-2">
          <LiveChatContainer />
        </div>
      </div>

      <div className="w-2/3">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
