import { SearchIconBox, SearchInputBox, SearchInputWrapper } from "./CustomInput.styled";
import Icon from "../Icon/custom-icon";
import { iDefaultInterface } from "../../types/types";

interface iCustomInput extends iDefaultInterface{
    placeHolder: string;
}

const CustomInput = (props: iCustomInput) => {
    return (
        <SearchInputWrapper>
            <SearchInputBox onChange={props.onChange} placeholder={props.placeHolder}/>
            <SearchIconBox>
                <Icon className="icon" icon="IconSearch" onClick={props.onClick}/>
            </SearchIconBox>
        </SearchInputWrapper>
    );
};

export default CustomInput;