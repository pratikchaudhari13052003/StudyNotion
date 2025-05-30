import React from "react";
import { Link } from "react-router-dom";

const Button=({children,active,linkto})=>{
    return (
        <Link to={linkto}>

        <div className={`text-center text-sm px-8 py-4 rounded-md font-bold 
            ${active ? "bg-yellow-50 text-black " :
                        "bg-richblack-700 "
            }  hover:scale-95 transition-all duration-200
                       `}>    
        {children}
        </div>

        </Link>
    )
}

export default Button;
