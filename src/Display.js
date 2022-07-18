import React from "react";
import Genre from "./Genre";
import './Display.css';
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// Swiper required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { getTrailer } from './apiCalls';
import ReactPlayer from "react-player";




const Display = ({ data, handleChange, showDetails }) => {
    const featuredMovie = getTrailer(694919).then(data => {
        console.log(data.videos[0].key)
        return data.videos[0].key
    })
    let faveMovies = [694919, 501979, 579583]
    return (
        <section className="display-boxes">
        <>
            <Swiper 
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${featuredMovie}`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <article className="feature-slide">
                        <div className="feature-wrapper"></div>
                        <div className="feature-wrapper"></div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="feature-slide">
                        <div className="feature-wrapper"></div>
                        <div className="feature-wrapper"></div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className="feature-slide">
                        <div className="feature-wrapper"></div>
                        <div className="feature-wrapper"></div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </>
            <p style={{color:"white"}}>Browse the Collection</p>
            <Genre 
                data = {data}
                handleChange = {handleChange}
                // showDetails = {showDetails}
            />
        </section>
    );
};



export default Display;