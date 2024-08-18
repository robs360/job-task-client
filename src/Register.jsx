import React, { useContext } from "react";
import reg from './assets/reg.avif'
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import app from "./firebase.config";
import Nav from "./Nav";
const Register = () => {
    const auth=getAuth(app)
    const {createUser,user}=useContext(AuthContext)
    console.log(createUser)
    const bannerStyle = {
        backgroundImage: `url(${reg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const Name=e.target.name.value;
        const Email=e.target.email.value;
        const photo=e.target.image.value;
        const pass=e.target.pass.value;
        console.log(Name,Email,photo,pass)
        
        createUser(Email,pass)
        .then(res=>{
           Swal.fire("You Are In Here")
           updateProfile(auth.currentUser,{
             displayName:Name,
             photoURL:photo
         })
         .then(()=>{
             console.log("Yes")
         })
         .catch((error)=>{
              console.log("no")
         })
 
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
    return (

      <div>
          <Nav></Nav>
          <div className="w-[97%] mx-auto min-h-[90vh] py-4 rounded-sm mt-6
        flex items-center justify-center" style={bannerStyle}>
            <div className="flex justify-center md:flex-row flex-col-reverse items-center mt-12 gap-4">
            <div>
                <form onSubmit={handleSubmit} action="" className="flex flex-col p-2 py-4 border-2
            border-white rounded-md">
                    <h1 className="text-[17px] font-medium text-white">Name:</h1>
                    <input className="w-[330px] h-[50px]
                 rounded-md p-1 mt border-2 border-gray-400" placeholder="Your Name" type="text" name="name" id="" />
                    <h1 className="text-[17px] font-medium mt-3 text-white">Email:</h1>
                    <input className="w-[330px] h-[50px]
                 rounded-md p-1 border-2 border-gray-400" placeholder="email" type="text" name="email" />
                    <h1 className="text-[17px] font-medium mt-3 text-gray-500">Image Url:</h1>
                    <input className="w-[330px] h-[50px]
                 rounded-md p-1 border-2 border-gray-400" placeholder="Image Url" type="text" name="image" id="" />
                    <h1 className="text-[17px] font-medium mt-3 text-white">Password:</h1>
                    <input className="w-[330px] h-[50px]
                 rounded-md p-1 border-2 border-gray-400" placeholder="Password" type="password" name="pass" />
                    <button type="submit" className="w-[330px] h-[50px] mt-3
                 rounded-md text-xl font-medium
                 bg-black text-white">Register</button>
                </form>
                <Link><p className="text-center font-medium mt-3 text-white">Already Have An Account?</p></Link>
            </div>

        </div>
        </div>
      </div>
    )
}
export default Register