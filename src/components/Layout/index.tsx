import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
    Body,
    HeaderContainer,
    Logo,
    SearchInputBox,
    SearchInputWrapper, HeaderButtonWrapper,
    Wrapper, HeaderButton, SearchIconBox
} from "./Layout.styled";
import { ReactNode, useState } from "react";
import CustomSpinner from "../Spinner/custom-spinner";
import Icon from "../Icon/custom-icon";
import CustomNavbar from "../Navbar/CustomNavbar";
import { eNavList } from "../../types/types";
import CustomInput from "../Input/CustomInput";
import { PLACE_HOLDERS, PROJECT_TITLE } from "../../common/constant";


interface iLayout {
    children: ReactNode;
}


const HeaderButtonArray = [
    {title: "홈", targetUrl:""},
    {title: "가챠", targetUrl:""},
    {title: "내주변", targetUrl:""},
    {title: "마이페이지", targetUrl:""},
]

const Layout = ({ children }: iLayout) => {
    const navigate = useNavigate();
    const { isLoading, isMobile } = useSelector((state: RootState) => state.ui);
    const [activeItem, setActiveItem] = useState<string>(Object.values(eNavList)[0]);
    const [isNavVisible, setNavVisible] = useState(false);
    const handleBack = () => {

    };

    return (
        <Wrapper>
            {isLoading && <CustomSpinner/>}

            <HeaderContainer>
                <Logo><h1>{PROJECT_TITLE}</h1></Logo>
                <CustomInput onClick={()=>{}} onChange={() =>{}} placeHolder={PLACE_HOLDERS.SEARCH_GOTCHA}/>

                <HeaderButtonWrapper>
                    {HeaderButtonArray.map((button, index) => (
                        <HeaderButton onClick={()=>{}} key={index}>{button.title}</HeaderButton>
                    ))}
                </HeaderButtonWrapper>
            </HeaderContainer>

            <Icon icon={isNavVisible ? "IconDoubleUp" : "IconDoubleDown"}
                  style={{ position: "absolute", top: isMobile ? "6%" : "4%", zIndex: 10, cursor: "pointer" }}
                  onClick={() => setNavVisible(prev => !prev)} visible={isMobile}/>

            <CustomNavbar activeItem={activeItem} onMouseEnter={(item) => setActiveItem(item)}
                          onMouseLeave={(item) => setActiveItem(item)} onMouseClick={() => {}}
                          visible={isNavVisible}

            />


            <Body>
                {children}
            </Body>

        </Wrapper>

    );


};


export default Layout;