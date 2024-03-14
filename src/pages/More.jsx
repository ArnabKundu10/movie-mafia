import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAuth } from '../store/auth'
import "../assets/css/Popular.css"
import { useNavigate } from 'react-router-dom';
export default function More() {
   const responsive3 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 9,
        slidesToSlide: 5,
        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 7,
        centerMode: true,
        slidesToSlide: 5,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5,
        centerMode: true,
        slidesToSlide: 5,
      }
    };
  const {movieGenreItems,movieGenre,setItemDetails,setGenre}=useAuth();
  const[curPage,setCurPage]=useState(1);
  const direct=useNavigate();
  const e=curPage*8;
  const s=e-8;
  const totalContents=movieGenreItems?.slice(s,e);
  const pageNumbers=[];
  const n=Math.ceil(movieGenreItems?.length / 8);
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
         <div className='movie-genre'>
     <Carousel responsive={responsive3} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500}containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >    
         <button onClick={()=>setGenre("thriller")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Thriller</button> 
         <button onClick={()=>setGenre("sci-fi")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Sci-fi</button> 
         <button onClick={()=>setGenre("romance")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Romance</button> 
         <button onClick={()=>setGenre("comedy")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Comedy</button> 
         <button onClick={()=>setGenre("adventure")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Adventure</button> 
         <button onClick={()=>setGenre("animation")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Animation</button> 
         <button onClick={()=>setGenre("sports")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Sports</button> 
         <button onClick={()=>setGenre("musical")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Musical</button> 
         <button onClick={()=>setGenre("drama")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Drama</button> 
         <button onClick={()=>setGenre("family")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Family</button> 
         <button onClick={()=>setGenre("film-noir")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>Film-noir</button> 
         <button onClick={()=>setGenre("history")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>History</button>
         <button onClick={()=>setGenre("mystery")} className=' carausel-btn bg-transparent text-white  fw-bolder ps-2 p-2 rounded '>mistory</button>
    </Carousel> 
      </div>
      <p className='mt-3 ms-4 text-white fw-bolder fs-2 text-start'>Movies Under "{movieGenre}" Category</p>
         <div className='popular-contents pt-0 mt-1'>
            {totalContents?.map((item,index)=>{
              return(
              <div key={index} className='popular-image-container text-center'>
                  <img className='popular-image  rounded h-100' onClick={()=>getDetails(item)} src={item.posterImage} alt="" />
               <p className='text-center text-black bg-white fs-5 fw-bolder m-0 p-0' >{item.title} ({item.year})</p>
              </div>
              )
            })
            } 
         </div>
         <div className='btn-container'>
          <div className='d-flex justify-content-center'>
           <div className='prev-btn'>
               <button onClick={previousPage} disabled={curPage===1} className='p-2 m-1 fs-5 fw-bold '>prev</button> 
              </div>
            <ul className='d-flex flex-row flex-wrap ms-0 ps-0'>
              {pageNumbers?.map((num,index)=>{
                return(
                <li key={index}>
                  <button className='p-2 m-1 fs-5 fw-bold' style={btnColorChange(num)} onClick={()=>{setCurPage(num)}}>{num}</button>
                </li>)
              })}
              
            </ul>
              <div className='next-btn' >
                <button className='p-2 m-1 fs-5 fw-bold ' onClick={nextPage} disabled={curPage===n}>next</button>
               </div>
               </div>
         </div>
      </div>
    )
}
