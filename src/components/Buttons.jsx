import React from "react";

const Buttons = () => {
  const buttons= ["All", "Shorts", "Unwatched", "Vidoes", "For You", "Watched", "RecentlyUploaded", "Live", "Uploaded"]
  return (
    <div className="whitespace-pre">{buttons.map((e) => {
        return  <button key={e} className='bg-gray-200 px-5 py-1 rounded-lg m-2'>{e}</button>
        
    })}
    </div>

  );
};

export default Buttons;
