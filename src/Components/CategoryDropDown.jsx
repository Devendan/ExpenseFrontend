import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function CategoryDropDown({onSelect}) {

    const [category,setCategory] = useState();
    const navigate = useNavigate() ;

 const categories = ["Food", "Travel", "Shopping", "Bills","Groceries" , "Other"];

 const handleChange = (e) =>{
    const selected = e.target.value;
    setCategory(selected) ;

    // if(selected){
    //     //navigate(`/category/${selected}`) ;
    // }
 }


  return (
    <div>
         <select
              name="catTitle" // ye kuch bhi ho sakta h 
              value={category}
              onChange={(e)=>onSelect(e.target.value)}
              defaultValue=""
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-amber-500"
            >
              <option value="" disabled>Select category</option>
              
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
    </div>
  )
}

export default CategoryDropDown
