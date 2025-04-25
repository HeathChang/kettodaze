import { CardBody, CardContainer, CardHeader, CardImage, CardListContainer } from "./CustomCard.styled";


interface iCustomCard {
    imageList: any[];
    title: string;
    price: string | number;
    desc: string;
}

const CustomCard = (props: iCustomCard) => {
    return (
        <CardListContainer>
            <CardContainer>
                <CardImage/>
                <CardHeader>

                </CardHeader>
                <CardBody>

                </CardBody>
            </CardContainer>
        </CardListContainer>
    )
}

export default CustomCard;