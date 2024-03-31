import React, { useEffect, useState } from 'react'
export default function ListCeleb({item}) {
  const [details,setDetails]=useState(false);
//  const detailsFunc=()=>{
//   if(details){
//     return {
//       display:"flex"
//     }
//   }
//   else{
//       return {
//         display:"none"
//       }
//   }
//  }
useEffect(()=>{
console.log(details);
},[details])
  return (
   <div className='normal-body celeb-body' onMouseEnter={()=>setDetails(true)}  onMouseLeave={()=>setDetails(false)} onClick={()=>setDetails(true)}>
        {details && 
        (<div /* style={detailsFunc()} */ className='normal-details flex-column justify-content-center position-absolute align-items-center  rounded'>
        <p className='pb-0 mb-0 pt-0 mt-0 me-3 text-end position-absolute text-white w-100' style={{top:"60px"}}>
          <i onClick={(e)=>{e.stopPropagation();setDetails(false)}} className="fa-solid fa-xmark fs-1"></i>
          </p>
        <div className='text-center'>
          <img src={item.image} alt="" />
        </div>
        <div className='pt-0 mt-0 text-start'>
          <p className='mb-0 pt-0 mt-0 fw-bold fs-5 text-center'>{item.name}</p>
          <p className='mb-0 fw-bold'>Industry Role (profession) </p>
          <ul>
            {item.professions?.map((role,i)=>{
              return(
                <li className='list-item' key={i}>
                 {role}
                </li>
              )
            })}
          </ul>
          <p><b>Known For:-</b>  {item.knownFor.title}</p>
          <p className='text-center'><a href={item.knownFor.link} className='know-more text-black bg-white fw-bolder p-1 rounded border border-2 border-danger' target='__blank'>Know More</a></p>
        </div>
      </div>)}
   <img className='normal-img rounded' src={item.image} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.name}</p>
 </div>
  )
}