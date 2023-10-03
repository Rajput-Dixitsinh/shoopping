import React from 'react'
import toast from 'react-hot-toast';

const Category = ({setCategotyData,Category ,setallData}) => {

     const handleCategory = (category)=>{
           if(category===""){
              setCategotyData(Category);
              
           }
           else {
            let newData = Category.filter((item)=>item.category===category)
            setCategotyData(newData)
            
           }
     }

  return (
    <div>
        <div className='flex gap-8 justify-center items-center'>
        <button className="text-white font-semibold px-4 py-1 text-xl bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700  transition-colors duration-300 rounded-lg mt-1" onClick={()=>{
            handleCategory("")
        }}>
            All
        </button>
        <button className="text-white font-semibold px-4 py-1 text-xl bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700  transition-colors duration-300 rounded-lg mt-1" onClick={()=>{
            handleCategory("men's clothing")
        }}>
            Men's Wear
        </button >
        <button className="text-white font-semibold px-4 py-1 text-xl bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700  transition-colors duration-300 rounded-lg mt-1" onClick={()=>{
            handleCategory("women's clothing")
        }}>
            Women's Wear
        </button>
        <button className="text-white font-semibold px-4 py-1 text-xl bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700  transition-colors duration-300 rounded-lg mt-1" onClick={()=>{
            handleCategory("electronics")
        }}>
            Electronics
        </button>
        </div>
        
    </div>
  )
}

export default Category