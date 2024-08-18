import React, { useContext } from "react";
import log from './assets/login.jpg'
import google from './assets/google.png'
import git from './assets/git.png'
import Nav from "./Nav";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
const bannerStyle = {
    backgroundImage: `url(${log})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Login=()=>{
    const {user,singIn}=useContext(AuthContext)
    console.log(user)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const Email=e.target.email.value;
        const pass=e.target.pass.value;
        singIn(Email,pass)
        .then(res=>{
           Swal.fire("Login Successfully")
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }
    return(
       <div>
        <Nav></Nav>
         <div className="w-[95%] mx-auto md:w-[80%] min-h-[75vh]
        mt-6 rounded-md flex justify-center items-center" style={bannerStyle}>
            <div className="w-[356px] p-2 rounded-md bg-white shadow-2xl opacity-80">
                <h1 className="text-xl font-medium text-center mb-5">Login</h1>
                <form onSubmit={handleSubmit} action="">
                    <span className="text-[17px] mb-3 font-medium">Email:</span>
                    <input type="email" name="email"
                        className="rounded-md border-2 p-1 border-black mb-4 w-full h-[50px]" id="" />
                    <span className="text-[17px] font-medium">Password:
                    </span>
                    <input type="password" name="pass"
                        className="rounded-md p-1 border-2 border-black w-full h-[50px]" id="" />
                    <button type="submit" className="text-xl font-medium w-full h-[50px]
                  rounded-md mt-3 bg-black text-white">Login</button>
                </form>
                <div className="mt-6">
                    <h1 className="text-black mb-10 font-semibold text-xl
                       text-center">-----------Login With-----------</h1>
                    <div className="flex justify-evenly">
                        <button className="flex flex-col items-center justify-center">
                            <img src={google} className="w-[60px] h-[60px]" alt="" srcset="" />
                            <h1 className="text-[17px] font-semibold mt-1">Google</h1>
                        </button>
                        <button className="flex flex-col items-center justify-center">
                            <img src={git} className="w-[60px] h-[60px]" alt="" srcset="" />
                            <h1 className="text-[17px] font-semibold mt-1">Github</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Login