import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import React from 'react'

export default function SimillarMovies({item}) {
   const {setItemDetails}=useAuth();
   const direct=useNavigate();
 const getDetails=(item)=>{
  setItemDetails(item);
 direct("/movie-details");
 }
  return (
    <div className='normal-body'>
      <img className='normal-img rounded' onClick={()=>getDetails(item)}  src={item.image} alt=""/>  
      <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.title}</p>
    </div>
  )
}
