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
// import Icon from "../Icon/custom-icon";
import { formatCurrency } from "../../common/util";
import Icon from '@mui/material/Icon'
import { Explore as ExploreIcon, FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import { iDefaultInterface } from "../../types/types";




interface iCustomCard extends iDefaultInterface{
    image: string;
    title: string;
    price: string | number;
    desc: string;
}

const CustomCard = (props: iCustomCard) => {
    return (
            <CardContainer onClick={props.onClick}>
                <CardImage src={props.image} />
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    {/*<CardIcon><Icon className="icon" icon="IconSearch" onClick={()=>{}}/></CardIcon>*/}
                </CardHeader>
                <CardBody>
                    <CardIcon><ExploreIcon sx={{ fontSize: 20, color: "red" }} /></CardIcon>
                    <CardIcon><FavoriteIcon sx={{ fontSize: 20, color: "red" }} /></CardIcon>
                    <CardIcon><FavoriteBorderIcon sx={{ fontSize: 20, color: "red" }} /></CardIcon>


                    <CardPrice>{formatCurrency(props.price)}</CardPrice>
                </CardBody>
            </CardContainer>
    )
}

export default CustomCard;