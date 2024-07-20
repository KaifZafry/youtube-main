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
      <div className="flex col-span-1 items-center">
        <div className="ms-4">
        <img
          onClick={()=>handleSidebar()}
          className="w-6 cursor-pointer"
          src="./list.svg" width={40} 
          alt="menu"
        />
        </div>
        <div className="w-[100px]">
        <img
          className=" me-4 w-[11rem] "
          
          src="/youtube.png"
          alt="youtube"
        />
        </div>
       
      </div>
      <div className="col-span-10 relative text-left">
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
        <div className="absolute w-1/2 left-[26%]  -translate-x-1/2">
          <ul className="min-w-[25rem]">
            {suggetions.map((s)=> <li key={s} className="bg-white text-left w-full p-2 hover:bg-gray-300 cursor-pointer">🔍 {s}</li> )}
            
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1">
        <button><img width={40} src="./person-fill.svg"/></button>
      </div>
    </div>
  );
};

export default Header;