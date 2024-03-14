import React from 'react'
import { useAuth } from '../store/auth'
import "../assets/css/Popular.css"
import { useNavigate } from 'react-router-dom';
export default function Search() {
   const {searchItem,popularMovie,setItemDetails}=useAuth();
   const direct =useNavigate();
  const getDetails=(item)=>{
   setItemDetails(item)
   direct("/movie-details");
   }
   const filteredMovies=popularMovie?.filter((item)=>item.title.toLowerCase().includes(searchItem));
  return (
    <>
    <div className='pt-4 text-center'>
     {searchItem===""?
     <div className='text-white fs-1 fw-bolder mt-5 pt-5'>
         NO MOVIES ARE SEARCHED YET
     </div>
     :
     <div className='popular-body mt-5 pt-5'>
      <p className='text-white fs-1 fw-bolder'>Search Results for "{searchItem}"</p>
      <div className='popular-contents'>
      {filteredMovies.length!==0? filteredMovies
      .map((item,index)=> (
               <div key={index} className='popular-image-container text-center'>
                <img className='popular-image  rounded h-100' onClick={()=>getDetails(item)} src={item.image} alt="" />
             <p className='text-center text-black bg-white fs-5 fw-bolder m-0 p-0' >{item.title} ({item.year})</p>
            </div>
            ))
            :
            <p className='nomovie text-white fs-1 fw-bolder'>No Movies are Found in this Search Result</p>          
      }
      </div>
      </div>
      }
      </div>
    </>
  )
}
