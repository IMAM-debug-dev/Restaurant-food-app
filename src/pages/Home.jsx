import React , { useState , useContext } from 'react'
import Navbar from '../components/Navbar'
import Catagorry from '../components/catagorry'
import { dataContext } from '../context/userContext'
import Card  from "../components/Card"
import { food_items } from "../food.js";
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/card2.jsx'
import { useSelector } from 'react-redux'


const Home = () => {
  let {cate , setcate , input ,showcard , setshowcard }=useContext(dataContext)

function filter(Catagorry) {
  if (Catagorry === "ALL") {
    setcate(food_items)
  } else {
    let Newlist = food_items.filter(
      (item) => item.food_category === Catagorry
    )
    setcate(Newlist)
  }
}

let items = useSelector(state=>state.card)

  return (
    <div className='bg-slate-200  min-h-screen w-full '>
      <Navbar />
      { !input?
       <div 
       className='flex items-center justify-center gap-15 w-full '>
        { Catagorry.map((item)=>{
          return <div className='h-150 w-150 bg-white flex flex-col justify-center text-gray-700 shadow-2xl items-center gap-5 rounded-3xl hover:bg-green-200 cursor-pointer transition-all duration-400 '
           onClick={() => filter(item.name)}>
            {item.Image}
            <h2 className="text-5xl font-bold">{item.name}</h2>
            
          </div>
        }) }
      </div>:null}
     
      <div className="flex justify-center items-center gap-20 flex-wrap">
  {cate.map((item) => (
    <Card
      key={item.id}
      name={item.food_name}
      image={item.food_image}
      price={item.price}
    />
  ))}
</div>
<div className={`w-[40vw] h-full  fixed top-0 right-0 bg-white transition-all duration-700 shadow-2xl ${showcard?"translate-x-0":"translate-x-full"}`} >

  <header className='w-full flex justify-between items-start text-7xl  p-15'>
    <span className='text-green-400 text-18 font-semibold'>Order item</span>
    <span><RxCross2 className='text-green-400 h-30 w-30 font-bold cursor-pointer hover:bg-gray-500' onClick={()=>setshowcard(false)} /></span>
  </header>
   <div className='w-ful mt-15 flex flex-col gap-10'>
    {items.map((item)=>(
      <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
    ))}
   </div>
</div>
      
    </div>
  )
}

export default Home
