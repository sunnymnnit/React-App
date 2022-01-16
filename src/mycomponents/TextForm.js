import React, { useState } from "react";



export default function TextForm()
{
    const handleonchange = (event)=>
{
    settext(event.target.value);
    return ;
}
const mycustom=()=>{
    var temp=text;
    temp= temp.toUpperCase();
    settext(temp);
    document.title="converted to uppercase";
    setInterval(myTimer, 1000);
    setInterval(mufunc,1500);
        function mufunc()
        {
        document.title="sdaf";
        }
        function myTimer() {
         document.title="haha"
        }
}
    const [text, settext] = useState('enter a value');
    return (
        <>
        <div className="body mx-5" id="item">
            <textarea value={text} rows="10" cols="100"  onChange={handleonchange} ></textarea>
        </div>
        <button className="btn btn-primary mx-5" onClick={mycustom}>click here</button>
        </>

    );
}