import { MapPlusIcon, PlusCircleIcon, PlusSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import CategoryDropDown from "./CategoryDropDown";

export default function Navbar({onCategorySelect}) {

  const navigate = useNavigate() ;
  const [open, setOpen] = useState(false);

   const[isLogin , setIsLogin] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token") ;
      if(token){
        setIsLogin(true) ;
      } else{
        setIsLogin(false) ;
      }
   } , []) ;



  return (
    <nav className="bg-slate-900 text-white p-4 pb-4">
      <div className=" w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">Track ExpenSo</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            {/* <Link to="/getAllExpenses" className="hover:text-blue-400">Expenses</Link> */}
            {/* <Link to="" className="hover:text-blue-400"><CategoryDropDown/></Link> */}
            <CategoryDropDown onSelect={onCategorySelect} />
            
            {!isLogin && (
              <>
               <Link to ="/login"><button className="px-4 py-2 rounded-2xl bg-amber-500"> Login </button> </Link>
                <Link to = "/register"><button className="px-4 py-2 rounded-2xl bg-amber-500 text-gray-800"> Register </button></Link>
            </>
            )}

            {isLogin && (
               <button onClick={() =>{
                if(!window.confirm("Are you sure to logout")) return;
                localStorage.removeItem("token") ;
                localStorage.removeItem("userId");
                setIsLogin(false) ;
                navigate("/login" ) ;
                
               }} className="px-4 py-2 rounded-2xl bg-amber-500"> logout</button>
            )}
            
            <Link to ="/add"><button className="px-4 py-2 rounded-2xl bg-amber-500 text-gray-800"> <PlusSquareIcon className="size-6"/><span> </span> Add </button></Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-blue-400">Home</Link>
          <Link to ="getAllExpenses" className="block hover:text-blue-400">Expenses</Link>
          <a href="#" className="block hover:text-blue-400">Category</a>
          <a href="#" className="block hover:text-blue-400">Profile</a>
        </div>
      )}
    </nav>
  );
}
