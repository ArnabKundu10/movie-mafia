import React from 'react'
import { useAuth } from '../store/auth'
import "../assets/css/NewsDetails.css"
import { useNavigate } from 'react-router-dom';
export default function NewsDetails() {
   const {newsitemDetails}=useAuth();
   const direct=useNavigate();
  return (
    <div className='news-details-body text-white'>
      <div className='news-details-img position-relative'>
         <div className='absolute-head-news position-absolute w-100'>
            <ul className='d-flex fs-1 fw-bolder w-100 justify-content-center'>
             <li onClick={()=>direct(-1)}>News <span className='text-danger'>{"->"}</span>  </li>
             <li>NewsDetails</li>
            </ul>
         </div>
         <img src={newsitemDetails.image} alt="" />
      </div>
      <div className='ps-5 pe-5 ms-5 me-5 pt-5 pb-5'>
         <p className='fw-bolder fs-1 text-center'>{newsitemDetails.title}</p>
         <pre className='text-center fw-bold'>Date:- {newsitemDetails.date}  {newsitemDetails.writer}</pre>
         <p style={{textAlign:"justify"}}>{newsitemDetails.description}</p>
         <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam asperiores nulla voluptates consequatur neque dolorem, eum quod tempore deserunt eos consequuntur recusandae necessitatibus! Iste ratione possimus exercitationem accusantium, voluptate nostrum placeat pariatur, iusto adipisci et maiores quos, ipsum eius eos harum repudiandae quasi maxime cupiditate explicabo. Harum debitis, voluptatibus mollitia reprehenderit quo optio sapiente alias iste omnis dolorum, placeat a ex nesciunt. Molestiae repellendus, asperiores ipsum officiis culpa odio nisi impedit placeat, eos enim modi reiciendis ab a nobis, deserunt laborum saepe repellat suscipit quidem. Perspiciatis similique exercitationem, ab illo deserunt aperiam adipisci, accusantium tempore soluta expedita a dignissimos!</p>
         <p className='fs-5 fw-bold'>Source:- {newsitemDetails.source}</p>
         <p className='mt-3'><a target='__blank' href={newsitemDetails.sourceLink}><button className='btn mt-3 btn-danger'>Source Link</button></a></p>
      </div>
      </div>
  )
}
