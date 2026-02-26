import axios from "axios";
import React, { useState } from "react";
import { ExpenseData } from "./Expense";
import { useNavigate } from "react-router";

export default function CreateExpense() {

  const baseUrl = import.meta.env.VITE_API_URL;
  
const navigate = useNavigate() ;

  const[formData, setFormData] = useState({
    title: "",
    amount: "",
    catTitle:"",
    description: "",
    userId:localStorage.getItem("userId")
  });


  const categories = ["Food", "Travel", "Shopping", "Bills","Groceries" , "Other"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    
    try{

      const expenseData ={
        title: formData.title,
        amount:formData.amount ,
        description:formData.description ,
        catTitle:formData.catTitle,
        userId:localStorage.getItem("userId")
      };
      const token = localStorage.getItem("token");
      const res = await axios.post(`${baseUrl}/expo/addExpenses` ,expenseData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      ) ;
      console.log(res.data);
      navigate("/")
      alert("Expense Added") ;


    }
    catch(error){
      //console.log("Message ",res.getMessage);
      //console.log("Status : " ,res.status)
      console.log(error);
      alert("Error adding expense");
    }
  };

  return (
    <div className="bg-gray-800">
    <div className="min-h-screen flex justify-center items-center ">
      <div className="w-[320px] bg-gray-900 border border-amber-600 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Add Expense
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Title */}
          <div>
            <label className="text-lime-100 text-sm">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-lime-100 text-sm">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="text-lime-100 text-sm">Category</label>
            <select
              name="catTitle" // ye kuch bhi ho sakta h 
              value={formData.catTitle}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-amber-500"
            >
              <option value="" placeholder="Category"></option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-lime-100 text-sm">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="3"
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-green-600 text-black py-2 rounded-lg hover:bg-green-800 transition"
          >
            Save Expense
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
