import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeBodyContent, HomeBodyBox, HomeBodyTitle, HomeContainer } from "./Home.styled";
import CustomCard from "../../components/Card/CustomCard";
import HomeBanner from "./components/HomeBanner";


import CustomSwiper from "../../components/Swiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { cardArrayList } from "../../dummy/data";


const swiperOptions = {
    loop: false,
    effect: "fade",
    navigation: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 6,
        },
    },
};


const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (card: any) => {
        const {id} = card
        if(!!id) navigate(`product/${id}`);

    }

    return (
        <HomeContainer>
            <HomeBanner imageArray={[]}/>

            {/* 추천 갓챠 */}
            <HomeBodyBox>
                <HomeBodyTitle>추천 갓챠</HomeBodyTitle>
                <HomeBodyContent>
                    <CustomSwiper options={swiperOptions}>
                        {
                            cardArrayList.map((card, index) => (
                                <SwiperSlide key={index} style={{ justifyItems: "center" }}>
                                    <CustomCard key={index} image={card.image} title={card.title} price={card.price}
                                                desc={card.desc} onClick={() => handleClick(card)}/>
                                </SwiperSlide>
                            ))
                        }
                    </CustomSwiper>
                </HomeBodyContent>
            </HomeBodyBox>

            {/* 신규 갓챠 */}
            <HomeBodyBox>
                <HomeBodyTitle>신규 갓챠</HomeBodyTitle>
                <HomeBodyContent>
                    <CustomSwiper options={swiperOptions}>
                        {
                            cardArrayList.map((card, index) => (
                                <SwiperSlide key={index} style={{ justifyItems: "center" }}>
                                    <CustomCard key={index} image={card.image} title={card.title} price={card.price}
                                                desc={card.desc} onClick={() => handleClick(card)}/>
                                </SwiperSlide>
                            ))
                        }
                    </CustomSwiper>
                </HomeBodyContent>
            </HomeBodyBox>


            {/* 추천 갓챠샵 */}
            <HomeBodyBox>
                <HomeBodyTitle>추천 갓챠 샵</HomeBodyTitle>
                <HomeBodyContent>
                    ㅇ
                </HomeBodyContent>
            </HomeBodyBox>
        </HomeContainer>
    );
};

export default HomePage;