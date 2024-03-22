import React from 'react'
export default function ListCeleb({item}) {
  
  return (
   <div className='normal-body celeb-body'>
        <div className='normal-details flex-column justify-content-center position-absolute align-items-center  rounded'>
          <div className='text-center'>
            <img src={item.image} alt="" />
          </div>
          <div className='pt-0 mt-0'>
            <p className='mb-0 pt-0 mt-0 fw-bold fs-5'>{item.name}</p>
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
            <p><a href={item.knownFor.link} target='__blank'>Know More</a></p>
          </div>
        </div>
   <img className='normal-img rounded' src={item.image} alt=""/>  
    <p className='text-center text-black bg-white fs-5 fw-bolder' >{item.name}</p>
 </div>
  )
}