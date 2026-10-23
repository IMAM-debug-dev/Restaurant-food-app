
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useContext , useEffect } from "react";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { food_items } from "../food.js";
import { dataContext } from '../context/userContext'
import { useSelector } from 'react-redux'

const Navbar = () => {
  let {input ,setinput , cate , setcate , showcard , setshowcard }= useContext(dataContext)
  useEffect(()=>{
    let newList = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setcate(newList)
  }, [input])
  let items = useSelector(state=>state.card)
  return (
    <div className=' w-full h-100 flex items-center justify-between p-15   '>
      <div className="h-60 w-60 bg-white flex justify-center items-center shadow-2xl rounded-2xl ">
      <IoFastFoodSharp className="w-30 h-30 text-green-400 shadow-2xl" />
      </div>
      
         <div className="h-40 w-\[45\%\] bg-white flex items-center p-10 shadow-2xl rounded-2xl md: w-[70%]">
       <form className="flex items-center rounded-md w-[95%]"
       onSubmit={(e)=>e.preventDefault()}>
      <FaSearch className="h-10 w-20 text-green-500" />
      <input type="text" placeholder="search item" className="text-6xl w-[90%] outline-none bg-white" onChange={(e)=>setinput(e.target.value)}  value={input}/>
    </form>
    </div>

            <div className="h-60 w-60 bg-white flex justify-center relative items-center shadow-2xl rounded-2xl"
            onClick={()=>{
              setshowcard(true)
            }} >
              <span className=" absolute text-green-500 top-2 right-5 text-6xl font-bold">{items.length}</span>
      <RiShoppingBag4Fill className="w-30 h-30 cursor-pointer text-green-400 shadow-2xl " />

      </div>

    </div>
  )
}

export default Navbar
