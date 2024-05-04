import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery]= useState("");
  const [suggetions, setSuggestions]= useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(()=>getInputSuggestion(),200);

    return ()=>{
      clearTimeout(timer); 
    }
  },[searchQuery])

  const getInputSuggestion = async () =>{
    const data= await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery)
    const json= await data.json();
    // console.log(json[1])
    setSuggestions(json[1]);
    console.log(suggetions)
    
  }
    const dispatch= useDispatch()
    const handleSidebar= ()=>{
      console.log("clicked")
        dispatch(toggleMenu());
    }
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-md w-full bg-white fixed z-10">
      <div className="flex col-span-1">
        <img
          onClick={()=>handleSidebar()}
          className="w-8 mr-3 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube"
        />
      </div>
      <div className="col-span-10">
        <div>
        <input
          className="p-1 px-2 w-1/2 border border-gray-500 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
        />
        <button onClick={()=>{
          console.log("searching is in progress...") 
        }} className=" px-4 py-1 border border-gray-500 bg-gray-100 rounded-r-full">
          🔍
        </button>
        </div>
        {showSuggestions && (
        <div className="absolute left-[25rem]">
          <ul className="min-w-[55rem]">
            {suggetions.map((s)=> <li key={s} className="bg-white text-left w-1/2 p-2 hover:bg-gray-300 cursor-pointer">🔍 {s}</li> )}
            
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1">
        <button>👤</button>
      </div>
    </div>
  );
};

export default Header;