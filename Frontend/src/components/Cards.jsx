import React from 'react'

const Cards = ({item}) => {

    ;
  return (
    <>
    
    <div className='mt-4 my-3 p-3  '>
    <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-202  dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  flex justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className=" cursor-pointer  px-2 py-1 rounded-full  hover:text-blue-500 ">Buy Now</div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Cards
