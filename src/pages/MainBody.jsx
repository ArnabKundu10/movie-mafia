// import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FreeMode, Navigation} from 'swiper/modules';
import "../assets/css/MainBody.css";
import { useAuth } from '../store/auth';
import Trailers from '../components/Trailers';
import ListPopular from '../components/ListPopular';
import ListTop from '../components/ListTop';
import ListBiography from '../components/ListBiography';
import ListBoxoffice from '../components/ListBoxoffice';
import ListCeleb from '../components/ListCeleb';
import ListUpComing from '../components/ListUpComing';
import { useEffect, useState } from 'react';
export default function MainBody() {
  const {trendTrailer,popularMovie,topMovie,biographyMovie,boxOffice,celebrities,upcomingItems,setUpcoming}=useAuth();
  const[selectUpcoming,setSelectUpcoming]=useState(0);
  const[spv,setSpv] = useState(null);
  useEffect(()=>{
    const updateWindowWidth=()=>{
      window.innerWidth>740 ? setSpv(6) :setSpv(3);
    }  
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  },[]);
  const styleUpcoming=(index)=>{
   if (index===selectUpcoming) {
    return{
      backgroundColor:"rgb(220, 53, 69,1)",
      color:"white !important"
    }
   }
   else{
    return{
      backgroundColor:"transparent"
    }
   }
  }
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
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 20 ,
  }
};
const responsive5 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  }
};
  return (
    <div className='home-body '>
      <div className='trending-trailers'>
       <Carousel responsive={responsive1} centerMode={true} keyBoardControl={true} infinite={true} ssr={true} 
      swipeable={true} customTransition="all 1s" containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {trendTrailer?.map((item,index) => (
        <Trailers key={index}  item={item}/>      
      ))}
    </Carousel> 
    </div>
    <div className='trending-movies pt-5 pb-5'>
    <p className='ms-2 text-white fw-bolder fs-4'>Trending Movies</p>
     <Carousel responsive={responsive2} partialVisible={true} keyBoardControl={true} ssr={true} 
      swipeable={true} customTransition="all 1s"   containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {popularMovie?.map((item,index) => (
        <ListPopular key={index} parentDetails={popularMovie} item={item}/>      
      ))}
    </Carousel> 
    </div>
    <div className='top-100 pt-5 pb-5'>
    <p className='ms-2 text-white fw-bolder fs-4'>Top 100 Movies of All Time</p>
     <Carousel responsive={responsive2} partialVisible={true} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all 1s" containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {topMovie?.map((item,index) => {
        if(index<100){
          return (<ListTop key={index} item={item}/> ) 
        }
        return <li className='w-0'></li>
        })}
    </Carousel> 
    </div>
    <div className='oscar-movie text-center'>
      <div className='oscar-watch-btn text-center position-absolute w-100'>
        <button className='btn fs-3 fw-bolder ps-4 pe-4 pt-2 pb-2'>
        <i class="fa-solid fa-play me-3"></i>
          Watch Now</button>
      </div>
      <p className='ms-2 text-white fw-bolder fs-3'>Watch 7 Academy Awards Winning Movie Oppenheimer</p>
      <div className='oscar-image'>
      <img  src="https://www.oppenheimer.mx/meta/meta-v3-es_MX.jpg" alt="" />
      </div>
    </div>
    <div className='movie-stars pt-5 '>
    <p className='ms-2 text-white fw-bolder fs-4'>Your Favorite Movie Stars</p>
    <Swiper
        slidesPerView={`${spv}`}
        freeMode={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation,FreeMode]}
        className="mySwiper mb-0 pb-0"
      >
        {
          celebrities?.map((item,index)=>{
           return (<SwiperSlide key={index} className='rounded'>      
           <ListCeleb item={item}/>
        </SwiperSlide>)
          })
        }       
      </Swiper>
      </div>
    <div className='biography pt-5 pb-5'>
    <p className='ms-2 text-white fw-bolder fs-4'>Well Known Biographies</p>
     <Carousel responsive={responsive2} partialVisible={true} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all 1s" containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {biographyMovie?.map((item,index) =>
     <ListBiography key={index} item={item}/>       
      )}
    </Carousel> 
    </div>
    <div className='BoxOfficeTop pt-5 pb-5'>
    <p className='ms-2 text-white fw-bolder fs-4'>Best Box-Office Hits</p>
     <Carousel responsive={responsive2} partialVisible={true} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all 1s" containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {boxOffice?.map((item,index) =>
     <ListBoxoffice key={index} item={item}/>       
      )}
    </Carousel> 
    </div> 
    <div className='pt-5 pb-5 text-white'>
      <p className='ms-2 fw-bolder fs-4'>UpComing Movies & TV Shows</p>
      <div className='d-flex justify-content-center'>
        <div className='d-flex w-25 justify-content-around upcoming-title text-center flex-column ms-3'>
          <div onClick={()=>{setUpcoming("upcoming-movies");setSelectUpcoming(0)}} style={styleUpcoming(0)} className='upcoming-title-item fw-bold fs-5 pt-4 pb-4' >
            <p><i className="fa-solid fa-clapperboard fs-1 " style={{color : selectUpcoming===0? "white":"rgb(220, 53, 69,1)"}}></i></p>
            <p>Upcoming Movies</p>
          </div>
          <div onClick={()=>{setUpcoming("upcoming-tv-shows");setSelectUpcoming(1)}} style={styleUpcoming(1)}  className='upcoming-title-item fw-bold fs-5 pt-4 pb-4' >
            <p><i class="fa-solid fa-tv fs-1" style={{color : selectUpcoming===1? "white":"rgb(220, 53, 69,1)"}}></i></p>
           <p >Upcoming TV Shows</p> 
          </div>
        </div>
        <div className='w-75'>
        <Carousel responsive={responsive5} partialVisible={true} keyBoardControl={true} ssr={true} 
      swipeable={true}   customTransition="all 1s" containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} >
      {upcomingItems?.map((item,index) =>
     <ListUpComing key={index} item={item.list[0]}/>       
      )}
    </Carousel>
        </div>
      </div>
    </div>
    </div>
  )
}
