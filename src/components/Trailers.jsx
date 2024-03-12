import React from 'react'

export default function Trailers({item}) {
  return (
    
   <div className='trailer-body'>
   <div className='trailer-play position-absolute '>
   <a href={item.videoLink} style={{textDecoration:"none"}} target='__blank' className='rounded'>
   <i className="fa-solid fa-circle-play text-danger"></i>
   <br />
   <p className='watch-trailer text-center text-white mt-0 fs-5 fw-bolder'>Watch Trailer</p></a>
   </div>
   <img className='trailer-img rounded'  src={item.image} alt="" />
           
   <p className='text-center text-white bg-danger fs-4 fw-bolder' >{item.title}</p>
 </div>
  )
}
