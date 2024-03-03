import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data=[
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }, 
        },
        {
            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            filesize: "1.2mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle:"Download Now",              
                tagColor: "blue"
            }
        },
        {
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            filesize: "2.5mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle:"Download Now",
                tagColor: "yellow"
            }
        }
        
        
    ];
    useState()
  return (
    <div ref={ref} className=" fixed z-[3] left-0 top-0 w-full h-full flex gap-5 flex-wrap p-5 ">   
    {
        data.map((item, index) =>(
            <Card data={item}  refrence={ref}/>
        ))
    }
    </div>
  )
}

export default Foreground