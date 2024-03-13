import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import "../assets/css/Popular.css"
import { useNavigate } from 'react-router-dom';
export default function Popular() {
  const {popularMovie,setItemDetails}=useAuth();
  const[curPage,setCurPage]=useState(1);
  const direct=useNavigate();
  const e=curPage*12;
  const s=e-12;
  const totalContents=popularMovie?.slice(s,e);
  const pageNumbers=[];
  const n=Math.ceil(popularMovie?.length / 12);
  for(let i=1;i<= n;i++){
    pageNumbers.push(i);
  }
  const previousPage=()=>{
    setCurPage(curPage-1);
  }
  const nextPage=()=>{
    setCurPage(curPage+1);
  }
  const getDetails=(item)=>{
    setItemDetails(item);
   direct("/movie-details");
   }
   const btnColorChange=(num)=>{
     if(num===curPage){
      return(
        {opacity: "0.5"}
      )
     }
   }
  return (
    <div className='popular-body text-center'>
       <div className='popular-contents'>
          {totalContents?.map((item,index)=>{
            return(
            <div key={index} className='popular-image-container text-center'>
                <img className='popular-image  rounded h-100' onClick={()=>getDetails(item)} src={item.image} alt="" />
             <p className='text-center text-black bg-white fs-5 fw-bolder m-0 p-0' >{item.title} ({item.year})</p>
            </div>
            )
          })
          } 
       </div>
       <div className='btn-container'>
          
          <ul className='d-flex flex-row'>
            <li className='prev-btn'>
             <button onClick={previousPage} disabled={curPage===1} className='p-4 m-2 fs-5 fw-bold '>prev</button> 
            </li>
            {pageNumbers?.map((num,index)=>{
              return(
              <li key={index}>
                <button className='p-4 m-2 fs-5 fw-bold' style={btnColorChange(num)} onClick={()=>{setCurPage(num)}}>{num}</button>
              </li>)
            })}
            <li className='next-btn' >
              <button className='p-4 m-2 fs-5 fw-bold ' onClick={nextPage} disabled={curPage===n}>next</button>
             </li>
          </ul>
       </div>
    </div>
  )
}
