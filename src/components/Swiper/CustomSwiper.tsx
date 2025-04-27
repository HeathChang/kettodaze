import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { StyledSwiper } from "./CustomSwiper.styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface DefaultSwiperProps {
    options?: {};
    imageList?: string[];
}


const CustomSwiper: React.FC<DefaultSwiperProps> = ({ options, imageList }) => {

    return (
        <StyledSwiper
            {...options}
            modules={[Navigation, Pagination, A11y, Autoplay]}
        >
            <div className="image-wrapper">
                {imageList?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="Profile Background" width="1000" height="400" />
                    </SwiperSlide>
                ))}
            </div>
        </StyledSwiper>
    );
};


export default CustomSwiper;