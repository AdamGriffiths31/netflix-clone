import React,{useState, useEffect,useRef} from 'react'
import axios from './axios';
import "./Row.scss"
import SwiperCore,{  Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import { useViewport } from './useViewport'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const baseURL="https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl,isLargeRow,selectMovieHandler}) {
  const [windowDimensions] = useViewport()
  const { width } = windowDimensions
    const [movies,setMovies] = useState ([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
            }
        fetchData();
    },[fetchUrl])

    return ( 
      <>
      <div className="row">
      <h2>{title}</h2>
      <Swiper
        className='movieShowcase__container'
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        loopAdditionalSlides={
          width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
        }
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >      

      {movies.map(movie =>{
            if (movie.poster_path && movie.backdrop_path !== null) {
              return (
            <SwiperSlide
            onClick={() => selectMovieHandler(movie)}
            className={
              'movieShowcase__container--movie' 
            }
          >  
        <img key={movie?.id} className={`movieShowcase__container--movie-image`} src={`${baseURL}${isLargeRow?movie?.poster_path:movie?.backdrop_path}`} alt={movie?.name}/>
        </SwiperSlide>
        )
      }
    })}      

    </Swiper>

    </div>
    </>



    )
}

export default Row
