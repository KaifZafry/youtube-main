import React from "react";

const LiveMessages = ({ name, message }) => {
  

  return (
    <div className="flex items-center shadow-sm p-1">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&usqp=CAU"
        alt=""
      />
      <span className="font-bold px-1 text-sm">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default LiveMessages;
