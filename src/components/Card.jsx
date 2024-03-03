import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  return (
    <motion.div drag 
        dragConstraints={refrence} 
        whileDrag={{scale:1.2}}
        dragElastic={0.2} 
        dragTransition={{bounceStiffness:200, bounceDamping: 5}}
        className=' relative flex-shrink-0 h-72 w-60  rounded-[45px] py-10 px-25 bg-zinc-900/90 text-white p-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm  leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0    w-full left-0 '>
                <div className=' flex items-center justify-between  px-8 py-3 mb-3 ' >
                    <h5>{data.filesize}</h5> 
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {
                            data.close ? <IoMdClose /> 
                            :
                            <IoDownloadOutline size=".7em" color={data.color}/> 
                        } 
                        
                    </span> 
                </div>
                {
                    data.tag.isOpen && (
                    <div className={`tag w-full  py-4 bg-green-600 flex items-center justify-center`}>
                <h3 className='text-md font-semibold'>Download Now</h3>
                </div>
                )}
            </div>
        
    </motion.div> 

  )
}

export default Card