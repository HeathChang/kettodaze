import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ImgHTMLAttributes } from "react";

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

    
`;


export const SwiperImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    width: 1000px;
    margin: 3rem 0;
    height: 330px;
    min-width: 1000px;
    border-radius: 8px;
`;