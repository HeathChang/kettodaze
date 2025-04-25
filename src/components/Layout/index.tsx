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


interface iLayout {
    children: ReactNode;
}


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
                <Logo><h1>K-ettodaze</h1></Logo>

                <SearchInputWrapper>
                    <SearchInputBox/>
                    <SearchIconBox>
                        <Icon icon="IconSearch" onClick={() => {
                        }}/>
                    </SearchIconBox>

                </SearchInputWrapper>

                <HeaderButtonWrapper>
                    <HeaderButton>홈</HeaderButton>
                    <HeaderButton>가챠</HeaderButton>
                    <HeaderButton>내 주변</HeaderButton>
                    <HeaderButton>마이페이지</HeaderButton>
                </HeaderButtonWrapper>
            </HeaderContainer>

            <Icon icon={isNavVisible ? "IconDoubleUp" : "IconDoubleDown"}
                  style={{ position: "absolute", top: isMobile ? "6%" : "4%", zIndex: 10, cursor: "pointer" }}
                  onClick={() => setNavVisible(prev => !prev)} visible={isMobile}/>

            <CustomNavbar activeItem={activeItem} onMouseEnter={(item) => setActiveItem(item)}
                          onMouseLeave={(item) => setActiveItem(item)} onMouseClick={() => {
            }}
                          visible={isNavVisible}

            />


            <Body>
                {children}
            </Body>

        </Wrapper>

    );


};


export default Layout;