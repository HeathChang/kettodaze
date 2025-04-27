import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardListContainer, HomeBody, HomeContainer } from "./Home.styled";
import CustomCard from "../../components/Card/CustomCard";

import image1 from "../../assets/images/Gotchas/001-sanrio-characters.jpeg";
import image2 from "../../assets/images/Gotchas/002-shinchan-machibouke.jpeg";
import image3 from "../../assets/images/Gotchas/003-shinchan-camping.jpeg";
import image4 from "../../assets/images/Gotchas/005-shinchan-oyasumika.jpeg";
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

    useEffect(() => {

    }, []);

    return (
        <HomeContainer>
            <HomeBody>
                <CardListContainer>
                    {
                        cardArrayList.map((card, index) => (
                            <CustomCard key={index} image={card.image} title={card.title} price={card.price} desc={card.desc}/>
                        ))
                    }
                </CardListContainer>
            </HomeBody>

            <HomeBody>
                HELLO2
            </HomeBody>
        </HomeContainer>
    )
}

export default HomePage