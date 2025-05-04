import styled from "styled-components";
import { Swiper } from "swiper/react";
import { ImgHTMLAttributes } from "react";

export const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    
    .swiper-button-next, .swiper-button-prev {
        border: 1px solid ${({ theme }) => theme.colors.blueGrey30};
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primaryLight};
        z-index: 3;
        
        &:after {
            padding: 12rem;
            font-size: 22px;
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