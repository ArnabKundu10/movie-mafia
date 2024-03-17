import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/css/Footer.css"
import { useAuth } from '../store/auth'
export default function Footer() {
  const{setcurhead}=useAuth();
  return (
    <div className='footer-container d-flex flex-column text-white'>
      <div className="footer-subcontainer d-flex justify-content-between">
         <div className='d-flex justify-content-between w-50'>
             <div className=' d-flex flex-column'>
              <p className='fs-5 fw-bolder'>Movie Category</p>
               <p>
               <NavLink to="/" onClick={()=>{setcurhead(0)}} className="footer-link">For You</NavLink>
               </p>
               <p>
               <NavLink to="/popular" onClick={()=>{setcurhead(1)}} className="footer-link">Popular</NavLink>
               </p>
               <p>
               <NavLink to="/horror" onClick={()=>{setcurhead(3)}} className="footer-link">Horror</NavLink>
               </p>
               <p>
               <NavLink to="/action" onClick={()=>{setcurhead(2)}} className="footer-link">Action</NavLink>
               </p>
               <p>
               <NavLink to="/news" onClick={()=>{setcurhead(4)}} className="footer-link">News</NavLink>
               </p>
               
             </div>
             <div className='d-flex flex-column'>
             <p className='fs-5 fw-bolder'>Support</p>
             <p className='fw-bold footer-link'>Help</p>
             <p className='fw-bold footer-link'>Terms & Conditions</p>
             <p className='fw-bold footer-link'>Privacy Policy</p>
             <p className='fw-bold footer-link'>Content Complaints</p>
             </div>
         </div>
         <div>
         <p className='fs-5 fw-bolder'>Connect With Us</p>
         <a href="www.facebook.com"><i class="fa-brands fa-facebook fs-2 m-2 text-white"></i></a>
         <a href="www.facebook.com"><i class="fa-brands fa-instagram fs-2 m-2 text-white"></i></a>
         <a href="www.facebook.com"><i class="fa-brands fa-twitter fs-2 m-2 text-white"></i></a>
         <a href="www.facebook.com"><i class="fa-brands fa-github fs-2 m-2 text-white"></i></a>
         </div>
      </div>
      <div className="footer-subcontainer">
      <p className='text-center fw-bold'>Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved</p>
      </div>
    </div>
  )
}
