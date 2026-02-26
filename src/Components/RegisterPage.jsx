import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function RegisterPage() {

    const baseUrl = import.meta.env.VITE_API_URL;

    const[formData , setFormData] = useState({
        name:"", email:"" ,password:"" ,
    });

    const navigate = useNavigate();

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault() ;
        try{
            const response = await axios.post(`${baseUrl}/expo/user/register`, formData);

            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.id);
            console.log(response.data) ;

            navigate("/")
            toast.success("Register Successfully");
            //alert(response.data +"data Submit Successfully") ;
            
        }catch(error){
            console.error(error);
            alert("Error Occured") ;
        }
        
    };

  



  return (
    <div className=' bg-gray-800 '>
     <div className='min-h-screen flex justify-center items-center'>
        <div className='w-2xs bg-gray-900 text-white border-amber-400 border-2 rounded-xl p-4'>

            <h2 className='text-shadow-blue-300 font-semibold text-center'>Register</h2>

            <form action="" onSubmit={handleSubmit} className='flex flex-col'>
                <div>
                    <label className='text-amber-50 text-sm'> Username</label>
                    <input type="text" 
                    name="name" id=""
                     placeholder='username'
                     onChange={handleChange}
                     //value="" 
                     className='text-white text-sm w-full mt-3 p-2 border rounded-lg focus:outline-none border-gray-300 focus:border-amber-200'/>
                </div>

            <div>
                    <label className='text-amber-50 text-sm'> Email</label>
                    <input type="text" 
                    name="email" id=""
                     placeholder='Email'
                     onChange={handleChange}
                     //value="" 
                     className='text-white text-sm w-full mt-3 p-2 border rounded-lg focus:outline-none border-gray-300 focus:border-amber-200'/>
                </div>

                <div>
                    <label className='text-amber-50 text-sm'> Password</label>
                    <input type="password" 
                    name="password" id=""
                     placeholder='password'
                     onChange={handleChange}
                     //value="" 
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
