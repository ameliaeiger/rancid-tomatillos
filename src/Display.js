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




const Display = ({ data, handleChange, keyOne, keyTwo, keyThree }) => {
    let faveMovies = [694919, 501979, 579583];
    console.log("One", keyOne)
    console.log("Two", keyTwo)
    console.log("Three", keyThree)



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
                    <section className="feature-slide">
                        <div className="feature-wrapper">
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyOne}`}
                            />
                        </div>
                        <div className="feature-wrapper">
                            
                        </div>
                    </section>
                </SwiperSlide>
                    <section className="feature-slide">
                        <div className="feature-wrapper">
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyTwo}`}
                            />
                        </div>
                        <div className="feature-wrapper">
                            
                        </div>
                    </section>
                <SwiperSlide>
                    <section className="feature-slide">
                        <div className="feature-wrapper">
                            <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${keyThree}`}
                            />
                        </div>
                        <div className="feature-wrapper">
                            
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
            <p style={{color:"white", textAlign: "center", fontSize: "50px", fontFamily:"courier new"}}>Browse</p>
            <Genre 
                data = {data}
                handleChange = {handleChange}
                // showDetails = {showDetails}
            />
        </section>
    );
};



export default Display;