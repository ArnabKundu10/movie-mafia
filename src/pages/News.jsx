import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation,EffectCoverflow,Keyboard} from 'swiper/modules';
import "../assets/css/News.css";
import { useAuth } from '../store/auth';
export default function News() {
  const {movieNews,celebNews,setNewsItemDetails}=useAuth();
  const direct=useNavigate();
  const getNewsdetails =(item)=>{
    setNewsItemDetails(item);
    window.scrollTo({top:0,behavior:"smooth"});
    direct("news-details");
  }
  return (
    <div className='News-body'>
      <div className='container celebrity-news'>
        <p className='fs-1 fw-bolder text-center text-white'>All Recent <span className='text-danger'>H</span>ot News and Activities of World <span className='text-danger'>M</span>ovies, Shows & More</p>
        <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow,Navigation,Keyboard]}
        className="mySwiper"
      >
        {
          movieNews?.map((item,index)=>{
           return (<SwiperSlide key={index} className='rounded' style={{backgroundImage:`url(${item.image})`}}>      
                 <div className='news-container position-relative text-white'>
                 <div className='d-flex flex-column position-absolute bg-black'>
                   <p className='fs-5 fw-bold mb-0'>{item.title}</p>
                   <div className='d-flex justify-content-between'>
                   <p className='mb-0'>{item.date}</p>
                   <p className='mb-0'>{item.writer}</p>
                   </div>
                   <div>
                    <button onClick={()=>getNewsdetails(item)} className='btn btn-danger fw-bold'>
                      Get More
                    </button>
                   </div>
                 </div>
                 </div>
            </SwiperSlide>)
          })
        }       
      </Swiper>
      </div>
      <div className='container celebrity-news'>
        <p className='fs-1 fw-bolder text-center text-white'>
        <span className='text-danger'>P</span>opular Celebrities News  <span className='text-danger'>&</span> Curriculam Activities
        </p>
        <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow,Navigation,Keyboard]}
        className="mySwiper"
      >
        {
          celebNews?.map((item,index)=>{
           return (<SwiperSlide key={index} className='rounded' style={{backgroundImage:`url(${item.image})`}}>      
           <div className='news-container position-relative text-white'>
           <div className='d-flex flex-column position-absolute bg-black'>
             <p className='fs-5 fw-bold mb-0'>{item.title}</p>
             <div className='d-flex justify-content-between'>
             <p className='mb-0'>{item.date}</p>
             <p className='mb-0'>{item.writer}</p>
             </div>
             <div>
              <button onClick={()=>getNewsdetails(item)} className='btn btn-danger fw-bold'>
                Get More
              </button>
             </div>
           </div>
           </div>
      </SwiperSlide>)
          })
        }       
      </Swiper>
      </div>
    </div>
  )
}
