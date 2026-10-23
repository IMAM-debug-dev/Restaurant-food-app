import React from 'react'
import { useDispatch } from "react-redux";
import { AddItem } from '../redux/cardSlice';
import { MdEventAvailable } from "react-icons/md";
function Card({name, image , price , id, qty, type , catagory}) {

let Dispatch = useDispatch()

  return (
    <div  className='flex   mt-50  hover: transition-all border-green-200 border-12 rounded-3xl'>
     <div className=" w-/[270px/] h-/[320px] bg-white shadow-2xl  items-center   rounded-4xl  p-2">
        <div className='rounded-4xl'>
        <img 
       className="w-200 .rounded-3xl p-5 h-250 object-cover rounded-xl"
       src={image}
      alt={name}
/>
        </div>
       <div className=" w-[90%] text-5xl  font-bold mt-10">
  {name}
</div>
        <div className='flex justify-between w-[90%] text-5xl mt-5 text-green-500 ml-10 mr-10 '>
        <div>BTD {price}/-</div> <div className='flex'> <div><MdEventAvailable /></div> <div> Abaleable</div></div>
        </div>
        <div>
         <button className='bg-green-200 h-40 w-200 text-6xl rounded-6xl mt-5 hover:bg-green-400 transition-all' onClick={()=> Dispatch(AddItem({id:id , name:name , image:image , price:price , qty:qty }))}>Add to card</button>
        </div>
      </div>
    </div>
  )
}

export default Card
