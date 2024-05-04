import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";
import VideoTitle from "./VideoTitle";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

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
        </div>
      
        <div className="w-full mr-2">
          <LiveChatContainer />
        </div>
      </div>
      <div>
        <VideoTitle title={searchParams}/>
      </div>
      <div className="w-2/3">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
