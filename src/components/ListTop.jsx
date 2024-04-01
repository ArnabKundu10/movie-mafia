import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
export default function ListTop({item}) {
  const {setItemDetails}=useAuth();
  const direct=useNavigate();
const getDetails=(item)=>{
 setItemDetails(item);
 window.scrollTo({top:0,behavior:"smooth"});
direct("/movie-details");
}
  return (
   <div className='normal-body'>
   {/* <div className='normal-play position-absolute '>
   <i className="fa-solid fa-circle-play text-danger"></i>
   <br />
   <p className='watch-normal text-center text-white mt-0 fs-5 fw-bolder'>Watch normal</p>
   </div> */}
   <img className='normal-img rounded' onClick={()=>getDetails(item)} src={item.image} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.title}</p>
 </div>
  )
}
