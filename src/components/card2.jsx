import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/cardSlice';

function Card2({name , price , id , image , qty}) {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-120 bg-white shadow-2xl flex justify-between rounded-3xl  p-5'>
      <div className='w-[60%] h-full  text-6xl flex gap-15' > 
        <div className='w-[60%] h-full overflow-hidden rounded-2xl '>
           <img src={image} alt="image" className='object-cover' />
        </div>
        <div className='w-[40%] h-100 flex justify-around items-center  flex-col  gap-5'> 
            <div className='text-6xl  text-gray-600  font-semibold' > {name}</div>
            <div className='w-full flex  overflow-hidden shadow-2xl  font-semibold border-10 border-green-200 justify-around items-center rounded-4xl h-50 text-7xl bg-slate-500'>
            <button className='w-[30%] h-full bg-white hover:bg-gray-200 text-8xl'>-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center  hover:bg-gray-300'>{qty}</span>
                <button className='w-[30%] h-full bg-white  hover:bg-gray-200'>+</button>
              </div>
        </div>
        <div>

        </div>
      </div>
      <div> 
       <div className='w-full h-[50%] justify-end flex flex-col p-15'>
        <span className=' text-6xl text-green-400 font-semibold' > <h1>BTD-{price}</h1></span>
       </div>
       <div className=' text-6xl text-red-400 flex p-15 justify-end font-semibold'>
       <RiDeleteBin5Line  className='cursor-pointer' onClick={()=>{  dispatch(RemoveItem(id))}  } />

       </div>
      </div>
    </div>
  )
}

export default Card2
