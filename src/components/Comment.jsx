const Comment= ({data})=>{
    const {name,value}= data;
    return(
        <div className="flex shadow-sm bg-slate-100 p-2 my-2 ml-2">
            <span className="text-xl">👤</span>
            <div className="ml-3">
                <p className="font-bold">{name}</p>
                <p>{value}</p>
            </div>
            
        </div>
    )
}

export default Comment;