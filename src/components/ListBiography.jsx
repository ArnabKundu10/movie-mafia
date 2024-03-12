import React from 'react'

export default function ListBiography({item}) {
  return (
   <div className='normal-body'>
   {/* <div className='normal-play position-absolute '>
   <i className="fa-solid fa-circle-play text-danger"></i>
   <br />
   <p className='watch-normal text-center text-white mt-0 fs-5 fw-bolder'>Watch normal</p>
   </div> */}
   <img className='normal-img rounded'  src={item.posterImage} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.title}</p>
 </div>
  )
}