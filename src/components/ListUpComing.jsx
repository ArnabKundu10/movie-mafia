import React from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';
export default function ListUpComing({item}) {
  const {setItemDetails}=useAuth();
  const direct=useNavigate();
  const getDetails=(item)=>{
    setItemDetails(item);
   direct("/movie-details");
   }
  return (
    <div className='normal-body'>
   {/* <div className='normal-play position-absolute '>
   <i className="fa-solid fa-circle-play text-danger"></i>
   <br />
   <p className='watch-normal text-center text-white mt-0 fs-5 fw-bolder'>Watch normal</p>
   </div> */}
   <img className='normal-img rounded' onClick={()=>getDetails(item)}  src={item.image} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.title}</p>
 </div>
  )
}
