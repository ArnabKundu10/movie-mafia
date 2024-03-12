// import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../assets/css/MainBody.css";
import { useAuth } from '../store/auth';
// import { useNavigate } from 'react-router-dom'
import Trailers from '../components/Trailers';
import ListPopular from '../components/ListPopular';
import ListTop from '../components/ListTop';
import ListBiography from '../components/ListBiography';
import ListBoxoffice from '../components/ListBoxoffice';
export default function MainBody() {
  const {trendTrailer,popularMovie,topMovie,biographyMovie,boxOffice}=useAuth();
  // const direct=useNavigate();
  // const getDetails=(item)=>{
  //   console.log('i am tapped');
  //   setItemDetails(item);
  //   direct("movie-details");
  // }
  const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    centerMode: true,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    centerMode: true,
    slidesToSlide: 1,
  }
};
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
    <div className='home-body'>
      <p>I am main Body</p>
      <div className='trending-trailers'>
       <Carousel responsive={responsive1} centerMode={true} keyBoardControl={true} infinite={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500}containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {trendTrailer?.map((item,index) => (
        <Trailers key={index}  item={item}/>      
      ))}
    </Carousel> 
    </div>
    <div className='trending-movies'>
    <p className='ms-2 text-white fw-bolder fs-5'>Trending Movies</p>
     <Carousel responsive={responsive2} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500}containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {popularMovie?.map((item,index) => (
        <ListPopular key={index} item={item}/>      
      ))}
    </Carousel> 
    </div>
    <div className='top-100'>
    <p className='ms-2 text-white fw-bolder fs-5'>Top 100 Movies of All Time</p>
     <Carousel responsive={responsive2} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500}containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {topMovie?.map((item,index) => {
        if(index<100){
          return (<ListTop key={index} item={item}/> ) 
        }
        return <li className='w-0'></li>
        })}
    </Carousel> 
    </div>
     <div className='biography'>
    <p className='ms-2 text-white fw-bolder fs-5'>Well Known Biographies</p>
     <Carousel responsive={responsive2} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {biographyMovie?.map((item,index) =>
     <ListBiography key={index} item={item}/>       
      )}
    </Carousel> 
    </div>
    <div className='BoxOfficeTop'>
    <p className='ms-2 text-white fw-bolder fs-5'>Best Box-Office Hits</p>
     <Carousel responsive={responsive2} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all .5" transitionDuration={500}containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {boxOffice?.map((item,index) =>
     <ListBoxoffice key={index} item={item}/>       
      )}
    </Carousel> 
    </div> 
    </div>
  )
}
