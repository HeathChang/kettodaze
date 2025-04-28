import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeBodyContent, HomeBodyBox, HomeBodyTitle, HomeContainer } from "./Home.styled";
import CustomCard from "../../components/Card/CustomCard";
import HomeBanner from "./components/HomeBanner";

// @ts-ignore
import image1 from "../../assets/images/Gotchas/001-sanrio-characters.jpeg";
// @ts-ignore
import image2 from "../../assets/images/Gotchas/002-shinchan-machibouke.jpeg";
// @ts-ignore
import image3 from "../../assets/images/Gotchas/003-shinchan-camping.jpeg";
// @ts-ignore
import image4 from "../../assets/images/Gotchas/005-shinchan-oyasumika.jpeg";
// @ts-ignore
import image5 from "../../assets/images/Gotchas/006-shinchan-sanrio.jpeg";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const cardArrayList = [
    {
        id: "card-9",
        image: image1,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-8",
        image: image2,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-7",
        image: image3,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-6",
        image: image4,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-1",
        image: image5,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-2",
        image: image5,
        title: "산리오 친구들1-산리오 친구들1(산리오 친구들1)산리오 친구들1산리오 친구들1",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-3",
        image: image5,
        title: "산리오 친구들2-산리오 친구들2(산리오 친구들2)산리오 친구들2산리오 친구들2",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-4",
        image: image5,
        title: "산리오 친구들3-산리오 친구들3(산리오 친구들3)산리오 친구들3산리오 친구들3",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-5",
        image: image5,
        title: "산리오 친구들4-산리오 친구들4(산리오 친구들4)산리오 친구들4산리오 친구들4",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
];

const swiperOptions = {
    loop: false,
    effect: "fade",
    navigation: true,
    breakpoints: {
        1300: {
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