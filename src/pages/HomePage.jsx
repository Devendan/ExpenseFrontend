import React, { useEffect, useState } from 'react' ;
import Navbar from '../Components/Navbar';
import ExpenseCard from '../Components/ExpenseCard';
import axios from 'axios';
import ExpenseData from '../Components/ExpenseData';

export default function HomePage() {

  const baseUrl = import.meta.env.VITE_API_URL;

  const[selectedCategory , setSelectedCategory] = useState("");

  const[expenses , setExpense] = useState([]);
  const[loading , setLoading] = useState(true) ;
  const[selectedExpense , setSelectedExpense] = useState(null);

  

  useEffect(()=>{
    fetchExpenses() ;
  } ,[]);

  const userId = localStorage.getItem("userId")

  const fetchExpenses = async(category = "")=>{
    
    try{
      setLoading(true) ;
      const token = localStorage.getItem("token");
      let url = `${baseUrl}/expo/Expense/user/${userId}`
      
      if( category){
        url = `${baseUrl}/expo/user/${userId}/category/${category}`
      }
      const res = await axios.get(url,
      {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }

    );
      console.log(res.data);
      alert("Data fetch Successfully");
      setExpense(res.data) ;
      setLoading(false) ;

    }catch(error){
      console.log("Error in fetching the data :" , error);
      alert("Error in fetching the data ");
      setLoading(false) ;
    }
  };


  const handleView = async(expenseId) =>{
   try {
    const token = localStorage.getItem("token");
    console.log(token) ;

    const res = await axios.get(
      `${baseUrl}/expo/expense/${expenseId}`,
      {
        headers :{
          Authorization: `Bearer ${token}`,
        }
      }
    );
    console.log(res.data) ;
    setSelectedExpense(res.data);

   }catch(error){
    console.log("Error fetching expense by id:, error");
   }
  };

  return (
    <div className='bg-gray-800 min-h-screen min-w-full'>
      <Navbar
      onCategorySelect={(cat) =>{
        setSelectedCategory(cat) ;
        fetchExpenses(cat) ;
      }}
      />

    {/* <div className='max-w-7xl mx-auto p-4 grid
          grid-cols-1 
          lg:grid-cols-3
          sm:grid-cols-2
          gap-4'>
            {loading ? (<p className='text-white'>Loading ...</p>):
            (expenses.map((expense)=>(
              <ExpenseCard 
              key={expense._id}
              title={expense.title}
              amount={`$ ${expense.amount}`}
              createdAt ={expense.createdAt}
              categories={expense.catTitle}
              description = {expense.description}
              onView={handleView}
              />
            ))
            )}
          </div> */}

            {/* <ExpenseData /> */}

         {selectedExpense ? (
        <ExpenseData
          expense={selectedExpense}
          onClose={() => setSelectedExpense(null)}
          onUpdate={fetchExpenses}
        />
      ) : (
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            expenses.map((expense) => (
              <ExpenseCard
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={`$ ${expense.amount}`}
                createdAt={expense.createdAt}
                categories={expense.catTitle}
                description={expense.description}
                onView={handleView}
              />
            ))
          )}
        </div>
      )}
            
       
    </div>
  )
}
