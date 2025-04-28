import React, { ReactNode } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { StyledSwiper, SwiperImage } from "./CustomSwiper.styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface DefaultSwiperProps {
    options?: {};
    children: ReactNode;
}


const CustomSwiper: React.FC<DefaultSwiperProps> = ({ children, options }) => {
    return (
        <StyledSwiper
            {...options}
            modules={[Navigation, Pagination, A11y, Autoplay]}
        >
            {children}
        </StyledSwiper>
    );
};


export default CustomSwiper;