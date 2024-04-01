import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'
export default function HeadLink({setIsHovered}) {
   const{curhead,setcurhead}=useAuth();
   const bgheadlink=(index)=>{
if(index===curhead){
   return {
      borderBottom: '4px solid rgba(220, 53, 69, 1)',
      color: "rgba(255, 255, 255, 0.634)",
      backgroundColor: "rgba(255, 200, 221,0.07)"
   }
}
else{
   return{
      backgroundColor: "transparent",
   }
}
   }
      const toDifferentPage=()=>{
         window.scrollTo({ top: 0, behavior: 'smooth' });
        }
  return (
    <>
     <NavLink onClick={()=>{toDifferentPage();setcurhead(0)}} style={bgheadlink(0)} className="headlink pt-2 pb-3 ps-2 pe-2 fs-5 me-3" to="/">
        Home
        </NavLink>
      <NavLink onClick={()=>{toDifferentPage();setcurhead(1)}} style={bgheadlink(1)} className="headlink pt-2 pb-3 ps-2 pe-2 fs-5 me-3" to="/popular">
         Popular
      </NavLink>
      <NavLink onClick={()=>{toDifferentPage();setcurhead(2)}} style={bgheadlink(2)} className="headlink pt-2 pb-3 ps-2 pe-2  fs-5 me-3" to="/action">
         Action
      </NavLink>
      <NavLink onClick={()=>{toDifferentPage();setcurhead(3)}} style={bgheadlink(3)} className="headlink pt-2 pb-3   ps-2 pe-2 fs-5 me-3" to="/horror">
         Horror
      </NavLink>
      <NavLink onClick={()=>{toDifferentPage();setcurhead(4)}} style={bgheadlink(4)} className="headlink pt-2 pb-3   ps-2 pe-2 fs-5 me-3" to="/news">
         News
      </NavLink>
      <NavLink onClick={()=>{toDifferentPage();setcurhead(5)}} onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)} style={bgheadlink(5)} className="headlink pt-2 pb-3 ps-2 pe-2 fs-5 me-3" to="/more">
         More <i class="fa-solid fa-chevron-down"></i>
      </NavLink>
    </>    
  )
}
