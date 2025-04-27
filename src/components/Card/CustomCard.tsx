import {
    CardBody,
    CardContainer,
    CardDesc,
    CardHeader,
    CardIcon,
    CardImage,
    CardPrice,
    CardTitle
} from "./CustomCard.styled";
import Icon from "../Icon/custom-icon";
import { formatCurrency } from "../../common/util";


interface iCustomCard {
    image: string;
    title: string;
    price: string | number;
    desc: string;
}

const CustomCard = (props: iCustomCard) => {
    return (
            <CardContainer>
                <CardImage src={props.image} />
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardIcon>
                        <Icon className="icon" icon="IconSearch" onClick={()=>{}}/>
                    </CardIcon>
                </CardHeader>
                <CardBody>
                    <CardPrice>{formatCurrency(props.price)}</CardPrice>
                    <CardDesc>{props.desc}</CardDesc>
                </CardBody>
            </CardContainer>
    )
}

export default CustomCard;