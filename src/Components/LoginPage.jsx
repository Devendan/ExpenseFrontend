import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function LoginPage() {

    const baseUrl = import.meta.env.VITE_API_URL;

    const navigate = useNavigate()

    const[formData , setFormData] = useState({
            email:"",
            password:""
    })
   

    const handleChange=(e)=>{
        setFormData({
            ...formData ,
            [e.target.name] :e.target.value
        });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault() ;
        try{
            const resp = await axios.post(`${baseUrl}/expo/user/login`, formData);
            console.log(resp);
            localStorage.setItem("token",resp.data.token);
            localStorage.setItem("userId" ,resp.data.id) ;
            // console.log(resp.data.token) ;
            alert("Login Successfully");
            navigate("/")
            
            toast.success("User Login Successfully")
            
            
        }
        catch(error){
            console.log(error) ;
            alert("Error Occurred");
        }
    }

  return (
    <div className='bg-gray-800'>
    <div className='min-h-screen flex justify-center items-center'>
        <div className='w-2xs bg-gray-900 text-white border-amber-400 border-2 rounded-xl p-4'>

            <h2 className='text-shadow-blue-300 font-semibold text-center'>Login</h2>

            <form action="" onSubmit={handleSubmit} className='flex flex-col'>
                <div>
                    <label className='text-amber-50 text-sm'> Username</label>
                    <input type="text" 
                    name="email" id=""
                     placeholder='email'
                     onChange={handleChange} 
                     className='text-white text-sm w-full mt-3 p-2 border rounded-lg focus:outline-none border-gray-300 focus:border-amber-200'/>
                </div>

                <div>
                    <label className='text-amber-50 text-sm'> Password</label>
                    <input type="Password" 
                    name="password" id=""
                     placeholder='password'
                     onChange={handleChange} 
                     className='text-white text-sm w-full mt-3 p-2 focus:outline-none border rounded-lg border-gray-300 focus:border-amber-200'/>
                </div>

                <div>
                    <button
                    type="submit"
                    className='w-full mt-8  bg-green-500 hover:bg-green-600 h-12  border-2 rounded-lg text-black'>Submit</button>
                </div>

            </form>

        </div>
      
    </div>

    </div>
  )
}
