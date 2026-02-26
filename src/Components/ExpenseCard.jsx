import { DeleteIcon } from "lucide-react";
import CategoryTag from "./CategoryTag";

export default function ExpenseCard({ id ,description, amount, createdAt, categories ,title , onView  }) {
  return (
    <div className="w-full sm:max-w-sm bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition p-4 m-2">
      
      <div className="">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2  ">
         {title}
      </h2>

      {/* <h2 className=""> {DeleteIcon}</h2> */}

      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
        {/* Left Info */}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-700 font-bold">
            <span className="font-medium ">Amount:</span> {amount}
          </p>

          <p className="text-sm text-gray-700 font-bold">
            <span className="font-medium">Date:</span> {new Date(createdAt).toDateString()}
          </p>

           <p className="text-sm text-gray-700 font-bold">
            <span className="font-medium">Description</span> {description}
          </p>

          <div className="flex items-center gap-2 font-bold">
            <span className="text-sm font-medium text-gray-700">
              Category:
            </span>
            <CategoryTag category={categories}/>
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={()=> onView(id)}
        className="w-2xs sm:w-auto mt-2 sm:mt-0 bg-amber-600  px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          View
        </button>
      </div>
    </div>
  );
}
