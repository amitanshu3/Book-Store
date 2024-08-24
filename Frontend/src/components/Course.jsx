import React, { useEffect, useState } from 'react'

import Cards from './Cards';
import {Link} from 'react-router-dom'
import axios from "axios"
const Course = () => {
const[book,setBook]=useState([]);
useEffect(()=>{
   const getBook=async()=>{
       axios.get("https://book-web-app-backend.onrender.com/api/book")
       .then((response)=>{
        setBook(response.data);
       })
       .catch((error)=>{
         console.log(error);
       })
   }
   getBook();
},[])

  return (
    <>
     <div max-w-screen-2xl container mx-auto md:px-20 px-4>

        <div className='mt-28 items-center  justify-center text-center dark:mt-16 '>
  <h1 className='text-2xl md:text-4xl mt-5'>We Are Delighted to Have You <span className='text-blue-500'> Here !:)</span></h1>
  <p className='mt-12'>Get ready to challenge yourself, grow your expertise, and achieve your goals. Let's embark on this exciting journey together!

.</p>
   <Link to="/">
   
   <button className='bg-blue-500 mt-6 text-white   px-4 py-2 rounded-md hover:bg-pink-400 duration-300'>Back</button>
   </Link>
        </div>


        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        
     {
        book.map((item)=>(
          <Cards key={item.id} item={item} />
        ))
     }


        </div>
     </div>
    
    
    </>
  )
}

export default Course
