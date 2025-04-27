import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    
    .swiper-button-next, .swiper-button-prev {
        &:after {
            font-size: 18px; 
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;

        }
    }

    .swiper-slide img {
        border-radius: 8px;
        margin: 30px;
        height: 300px;
        width: 1000px;
        min-width: 1000px;
    }


`;