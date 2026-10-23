
import React, { useState, createContext } from 'react'
import { food_items } from "../food.js";

export const dataContext = createContext()

function UserContext({ children }) {
  let [input, setinput] = useState("")
let [cate, setcate] = useState(food_items)
let[showcard , setshowcard ] = useState(false);

 let data = { input, setinput, cate, setcate , showcard , setshowcard }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext

