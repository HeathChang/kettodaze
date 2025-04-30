import { iDefaultInterface } from "../../types/types";
import { PROJECT_TITLE } from "../../common/constant";
import { LogoContainer } from "./Logo.styled";

interface iLogo extends iDefaultInterface {

}

const Logo = (props: iLogo) => {
    return (
        <LogoContainer onClick={props.onClick}><h1>{PROJECT_TITLE}</h1></LogoContainer>
    );
};

export default Logo;