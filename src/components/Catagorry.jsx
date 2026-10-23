import { CgMenuGridO } from "react-icons/cg";
import { MdFreeBreakfast } from "react-icons/md";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";



const Catagorry = [
  {
    Id: 1,
    name: "ALL",
    Image: <CgMenuGridO className="w-60 h-60 text-green-600" />
  },
  {
    Id: 2,
    name: "breakfast",
    Image: <MdFreeBreakfast className="w-60 h-60 text-green-600" />
  },
  {
    Id: 3,
    name: "soups",
    Image: <BsFillCupHotFill className="w-60 h-60 text-green-600" />
  },
  {
    Id: 4,
    name: "pasta",
    Image: <FaBowlFood className="w-60 h-60 text-green-600" />
  },
  {
    Id: 5,
    name: "main_course",
    Image: <TbToolsKitchen3 className="w-60 h-60 text-green-600" />
  },
  {
    Id: 6,
    name: "pizza",
    Image: <FaPizzaSlice className="w-60 h-60 text-green-600" />
  },
  {
    Id: 7,
    name: "burger",
    Image: <FaBurger className="w-60 h-60 text-green-600" />
  }
];

export default Catagorry;