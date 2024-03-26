import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAuth } from '../store/auth';
import SimillarMovies from '../components/SimillarMovies';
export default function MovieDetails() {
   const {itemDetails,popularMovie}=useAuth();
   const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      centerMode: true,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      centerMode: true,
      slidesToSlide: 4,
    }
  };
  return ( 
    <div className='movie-details'>
      <div className='main-movie-details d-flex rounded'> 
      <div className='movie-image-body'>
         <img className='movie-details-image rounded' src={itemDetails.posterImage||itemDetails.image} alt="" />
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
      <div className='movie-download d-flex justify-content-between'>
        <div className='d-flex text-center flex-column'>
         <p className='download rounded text-white fw-bolder fs-1 border border-2 border-white p-4 mb-5'>
          Watch Now
         </p>
         <p className='download rounded text-white fw-bolder fs-1 border border-2 border-white p-4'>
            Download <i className="fa-solid fa-download fs-1 ms-3"></i>
          </p>
        </div>
        <div className='w-50 text-white fs-5'>
           <p>This movie is only available in 480p, 720p, 1080p, 2160p. You can download or watch  this movie from left side. </p>
           <p>
            Subscribe now to enjoy uninterrupting movies, webseries and more <button className='btn btn-danger fw-bolder p-1'>Subscribe</button>
           </p>
        </div>
      </div>
      <div className='trending-movies pt-5 pb-5'>
    <p className='ms-2 text-white fw-bolder fs-4'>Simillar Movies Like This</p>
     <Carousel responsive={responsive2} keyBoardControl={true} ssr={true} 
      swipeable={true} customTransition="all 1s"   containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {popularMovie?.map((item,index) => (
        <SimillarMovies key={index} parentDetails={popularMovie} item={item}/>      
      ))}
    </Carousel> 
    </div>
    </div>
  )
}
