import {React,useState} from 'react'
import HeadLink from './HeadLink'
import "../assets/css/NavBar.css"
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';
// import Logo from "../assets/pictures/movie-mafia-logo2.jpg";
export default function NavBar() {
  const direct=useNavigate();
  const {setGenre,setSearch}=useAuth();
  const [isHovered, setIsHovered] = useState(false);
  // const searchedText =(e)=>{
  //   setSearch(e.target.value);
  // }
  const handleChange = (e)=>{
    setSearch(e.target.value);
  }
  const handleFocus=()=>{
    direct("search");
  }
  return (
    <>
    <div className='navbar d-flex text-center flex-column position-fixed w-100 pt-0'>
      
      <div className="navbox border-bottom border-white w-100">
        <p className='fw-bolder fs-2 m-0 text-center text-white'>
         <span className='text-danger'>M</span>OVIE <span className='text-danger'>M</span>AFIA 
        </p>
      </div>
      <div className="navbox  w-100 d-flex flex-row justify-content-between  p-1 fw-bolder text-white">
        <div className="subbox subscribe-box align-self-center ms-3 rounded ps-1 pe-1">
          <span className='fs-4 gradient-text'>     
            Subscribe
          </span>
        </div>
       <div className="subbox align-self-center">
        <HeadLink setIsHovered={setIsHovered}/>
        </div> 
        <div className="subbox align-self-center w-25">
          <input className=' p-1 w-75 rounded mt-1 me-1' onFocus={handleFocus} onChange={handleChange} type="text" placeholder='Search Movies,Shows and More'/>
           <button  className='btn btn-danger fw-bold rounded p-1'>Search</button>
        </div>
      </div>    
    </div>
    {isHovered && (<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='bg-black text-white rounded more-box position-absolute ps-2 pe-2 pb-2 pt-5'>
    <ul className='d-flex flex-wrap fw-bolder'>
     <li className='rounded' onClick={()=>{setGenre("thriller");direct("more")}}>Thriller</li>
     <li className='rounded' onClick={()=>{setGenre("sci-fi");direct("more")}}>Sci-fi</li>
     <li className='rounded' onClick={()=>{setGenre("romance");direct("more")}}>Romance</li>
     <li className='rounded' onClick={()=>{setGenre("comedy");direct("more")}}>Comedy</li>
     <li className='rounded' onClick={()=>{setGenre("adventure");direct("more")}}>Adventure</li>
     <li className='rounded' onClick={()=>{setGenre("animation");direct("more")}}>Animation</li>
     <li className='rounded' onClick={()=>{setGenre("sports");direct("more")}}>Sports</li>
     <li className='rounded' onClick={()=>{setGenre("musical");direct("more")}}>Musical</li>
     <li className='rounded' onClick={()=>{setGenre("drama");direct("more")}}>Drama</li>
     <li className='rounded' onClick={()=>{setGenre("family");direct("more")}}>Family</li>
     <li className='rounded' onClick={()=>{setGenre("film-noir");direct("more")}}>Film-noir</li>
     <li className='rounded' onClick={()=>{setGenre("history");direct("more")}}>History</li>
     <li className='rounded' onClick={()=>{setGenre("mystery");direct("more")}}>Mystery</li>
    </ul>
   </div>)}
    </>
  )
}
