import React from 'react'
import HeadLink from './HeadLink'
import "../assets/css/NavBar.css"
// import Logo from "../assets/pictures/movie-mafia-logo2.jpg";
export default function NavBar() {
  return (
    <div className='navbar d-flex flex-column position-fixed w-100 pt-0'>
      <div className="navbox border-bottom border-white w-100">
        <p className='fw-bolder fs-2 m-0 text-center text-white'>
         <span className='text-danger'>M</span>OVIE <span className='text-danger'>M</span>AFIA 
        </p>
      </div>
      <div className="navbox w-100 d-flex flex-row justify-content-between  p-1 fw-bolder text-white">
        <div className="subbox subscribe-box align-self-center ms-3 rounded ps-1 pe-1">
          <span className='fs-4 gradient-text'>     
            Subscribe
          </span>
        </div>
       <div className="subbox align-self-center">
        <HeadLink/>
        </div> 
        <div className="subbox align-self-center w-25">
          <input className=' p-1 w-75 rounded mt-1 me-1' type="text" placeholder='Search Movies,Shows and More'/>
           <button className='btn btn-danger fw-bold rounded p-1'>Search</button>
        </div>
      </div>
    </div>
  )
}
