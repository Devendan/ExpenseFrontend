import React, { useState } from 'react'
import axios from "axios";

function ExpenseData({ expense ,onClose , onUpdate }) {

  const baseUrl = import.meta.env.VITE_API_URL;

  const [formData , setFormData] = useState({
    
    title:expense.title,
    amount:expense.amount ,
    description:expense.description,
    catTitle:expense.catTitle,
  }) ;
  //if (!expense) return null;
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value ,
    });
  };

 const handleUpdate = async() =>{
  try{
    const token = localStorage.getItem("token") ;
    console.log("token");
    await axios.put(`${baseUrl}/expo/expense/edit/${expense.id}`,formData , {
      headers:{
        Authorization:`Bearer ${token}` ,
      }
    });
    alert("Expense Updated Successfully") ;
    onUpdate();
    onClose() ;
  }catch(error){
    console.log("update error: " , error);
  }
 };


  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 border border-amber-500 rounded-2xl shadow-2xl text-white p-6 space-y-6">

        {/* Title */}
        <div>
          <label className="block mb-2 font-semibold text-amber-400">
            Title
          </label>
          <textarea
            //readOnly
            name = "title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-lg resize-none outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-2 font-semibold text-amber-400">
            Amount
          </label>
          <textarea
            //readOnly
            name='amount'
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-lg resize-none outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-amber-400">
            Description
          </label>
          <textarea
            //readOnly
            name='description'
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-lg resize-none outline-none"
            rows={3}
          />
        </div>

        {/* Date */}
        {/* <div>
          <label className="block mb-2 font-semibold text-amber-400">
            Date
          </label>
          <textarea
            //readOnly
            name='createdAt'
            value={expense.date}
            className="w-full p-3 bg-gray-700 rounded-lg resize-none outline-none"
          />
        </div> */}

        {/* Category */}
        {/* <div>
          <label className="block mb-2 font-semibold text-amber-400">
            Category
          </label>
          <CategoryTag name={expense.category} />
        </div> */}

          <div className='flex gap-6'>
            <button className='bg-green-600 px-4 py-2 rounded-lg'
            onClick={handleUpdate}
            >Update</button>
            <button className='bg-red-300 px-4 py-2 rounded-lg'
            onClick={onClose}
            >Cancel</button>
          </div>

      </div>
    </div>
  );
}

export default ExpenseData;