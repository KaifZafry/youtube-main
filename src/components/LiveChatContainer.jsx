import React, { useEffect, useState } from "react";
import LiveMessages from "./LiveMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import generateNames, { makeRandomMessages } from "../utils/helper";

const LiveChatContainer = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();

  const liveMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("api polling is calling");
      dispatch(
        addMessages({
          name: generateNames(),
          message: makeRandomMessages(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="border border-black mt-14 w-full h-[400px] rounded-lg px-4 bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {liveMessages.map((message, index) => (
          <LiveMessages
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessages({
            name:'Kaif',
            message: chatMessage,
          }))
          setChatMessage("")
        }}
      >
        <input
          onChange={(e) => setChatMessage(e.target.value)}
          value={chatMessage}
          className="w-full p-2 m-2 border border-black rounded-md"
          type="text"
        />
        <button className="bg-gray-200 text-green-400 m-2 p-2 border rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChatContainer;
