import { HomeBannerContainer } from "./HomeBanner.styled";

// @ts-ignore
import dummyImage1 from "../../../assets/images/sample-banner.jpeg";
// @ts-ignore
import dummyImage2 from "../../../assets/images/sample-banner.jpeg";
// @ts-ignore
import dummyImage3 from "../../../assets/images/sample-banner.jpeg";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomSwiper from "../../../components/Swiper/CustomSwiper";



interface iHomeBanner {
    imageArray?: any[];
}

const imageArrayList=  [
    dummyImage1,
    dummyImage2,
    dummyImage3,
]

const swiperOptions = {
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, // 500ms로 전환
    effect: "fade", // 페이드 효과
    slidesPerView: 1, // 한 번에 1개 슬라이드 표시
    pagination: {
        clickable: true, // 페이지네이션 클릭 가능
    },
    navigation: true, // 네비게이션 활성화
}


const HomeBanner = (props: iHomeBanner) => {

    return (
        <HomeBannerContainer>
            <CustomSwiper options={swiperOptions} imageList={imageArrayList}/>
        </HomeBannerContainer>
    )
};




export default HomeBanner;


