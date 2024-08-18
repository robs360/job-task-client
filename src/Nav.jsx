import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";

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
        <div className="flex justify-between w-[97%] mx-auto mt-2">
            <div className="flex space-x-4">
            <Link className="text-[17px] font-medium" to={'/'}>Products</Link>
            <Link className="text-[17px] font-medium" to={'/login'}>Login</Link>
            <Link className="text-[17px] font-medium" to={'/reg'}>Register</Link>
            </div>
            <div>
                <button onClick={yarnClicked} className="btn glass text-[17px] font-medium">Logout</button>
            </div>
        </div>
    )
}
export default Nav