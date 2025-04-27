import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardListContainer, HomeBody, HomeBodyTitle, HomeContainer } from "./Home.styled";
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

const cardArrayList = [
    {image: image1, title: "산리오 친구들", price: "9000", desc: "테스트 카드입니다."},
    {image: image2, title: "산리오 친구들", price: "9000", desc: "테스트 카드입니다."},
    {image: image3, title: "산리오 친구들", price: "9000", desc: "테스트 카드입니다."},
    {image: image4, title: "산리오 친구들", price: "9000", desc: "테스트 카드입니다."},
    {image: image5, title: "산리오 친구들", price: "9000", desc: "테스트 카드입니다."}
]


const HomePage = () => {
    const dispatch = useDispatch()



    return (
        <HomeContainer>
            <HomeBanner imageArray={[]}/>
            <HomeBody>
                <HomeBodyTitle>추천 갓챠</HomeBodyTitle>
                <CardListContainer>
                    {
                        cardArrayList.map((card, index) => (
                            <CustomCard key={index} image={card.image} title={card.title} price={card.price} desc={card.desc}/>
                        ))
                    }
                </CardListContainer>

            </HomeBody>
            <HomeBody>
                <HomeBodyTitle>최근 발매 갓챠</HomeBodyTitle>
                <CardListContainer>
                    {
                        cardArrayList.map((card, index) => (
                            <CustomCard key={index} image={card.image} title={card.title} price={card.price} desc={card.desc}/>
                        ))
                    }
                </CardListContainer>

            </HomeBody>
        </HomeContainer>
    )
}

export default HomePage