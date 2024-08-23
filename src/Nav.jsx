import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
import logo from './assets/logo3.jpg'
const Nav=()=>{
    const {logOut,user}=useContext(AuthContext)
    console.log(logOut)
    const yarnClicked=()=>{
        logOut()
        .then(res=>{
            Swal.fire("You Have Logout")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    console.log(user)
    return(
        <div className="flex justify-between w-[97%] mx-auto mt-2 bg-blue-800 p-3 rounded-md">
            <div className="flex space-x-4 items-center">
            <img src={logo} className="w-[65px] h-[48px] rounded-[50%]" alt="" srcset="" />
            <Link className="text-[17px] text-white font-medium" to={'/'}>Products</Link>
            <Link className="text-[17px] text-white font-medium" to={'/login'}>Login</Link>
            <Link className="text-[17px] text-white font-medium" to={'/reg'}>Register</Link>
            </div>
            <div>
                <button onClick={yarnClicked} className="btn glass
                 text-[17px] font-medium text-white">Logout</button>
            </div>
        </div>
    )
}
export default Nav