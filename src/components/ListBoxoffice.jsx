import React from 'react'

export default function ListBoxoffice({item}) {
  return (
   <div className='normal-body'>
   {/* <div className='popular-play position-absolute '>
   <i className="fa-solid fa-circle-play text-danger"></i>
   <br />
   <p className='watch-popular text-center text-white mt-0 fs-5 fw-bolder'>Watch popular</p>
   </div> */}
   <img className='normal-img rounded'  src={item.posterImage} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.title}</p>
 </div>
  )
}