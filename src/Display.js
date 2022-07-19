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
import ReactPlayer from "react-player";




const Display = ({ data, handleChange, keyOne, keyTwo, keyThree }) => {
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
                        <div className="feature-wrapper">
                        <p>Money Plane</p>
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyOne}`}
                            />
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="feature-wrapper">
                            <p>Shirley</p>
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyTwo}`}
                            />
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="feature-wrapper">
                        <p>King of Staten Island</p>
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyThree}`}
                            />
                        </div>
                </SwiperSlide>
            </Swiper>
        </>
            <p style={{color:"white", textAlign: "center", fontSize: "50px", fontFamily:"courier new"}}>Browse</p>
            <Genre 
                data = {data}
                handleChange = {handleChange}
            />
        </section>
    );
};



export default Display;