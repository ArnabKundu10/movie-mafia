import React from 'react'
import { useAuth } from '../store/auth';
export default function MovieDetails() {
   const {itemDetails}=useAuth();
  return (
    <div className='movie-details'>
      <div className='main-movie-details d-flex rounded'> 
      <div className='movie-image-body'>
         <img className='movie-details-image rounded' src={itemDetails.posterImage} alt="" />
      </div>
      <div className='movie-others-body text-white'>
        <p className='fs-1 fw-bolder'>MOVIE TITLE:- {itemDetails.title}</p>
        <p>{itemDetails.description}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam asperiores at cumque tempora voluptates. Quia natus ducimus vitae iste. Corporis, perferendis enim. Sunt veniam fugit odio voluptate accusantium porro a omnis iste! Natus adipisci molestias debitis non atque voluptatibus quae sed incidunt illum eaque exercitationem, quas ab, earum dolorem at. Officiis optio ad tempora porro maxime consequatur rem, voluptatibus modi vero esse reprehenderit perferendis nulla, at maiores. Temporibus dicta officiis tenetur, adipisci reiciendis, quae in sapiente illo quisquam autem soluta incidunt ad doloremque tempora commodi alias ex excepturi accusantium animi earum. Sint iste animi quam eius, ipsum incidunt dolore est.</p>
        <p><b><i>Published Year:-</i></b> {itemDetails.year}</p>
        <p><b><i>Movie  Time Duration:-</i></b> {itemDetails.timeline}</p>
        <p><b><i>Rating:-</i></b> {itemDetails.rating}{itemDetails.imdbRating}</p>
      </div>
      </div>
    </div>
  )
}
