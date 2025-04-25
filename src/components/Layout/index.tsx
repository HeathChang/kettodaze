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
    const ui = useSelector((state: RootState) => state.ui);
    const [activeItem, setActiveItem] = useState<string>(Object.values(eNavList)[0]);

    const handleBack = () => {

    }

    return (
        <Wrapper>
            <HeaderContainer>
                <Logo><h1>K-ettodaze</h1></Logo>

                <SearchInputWrapper>
                    <SearchInputBox/>
                    <SearchIconBox>
                        <Icon icon="IconSearch" onClick={() => {}}/>
                    </SearchIconBox>

                </SearchInputWrapper>

                <HeaderButtonWrapper>
                    <HeaderButton><h3>홈</h3></HeaderButton>
                    <HeaderButton><h3>가챠</h3></HeaderButton>
                    <HeaderButton><h3>내 주변</h3></HeaderButton>
                    <HeaderButton><h3>마이페이지</h3></HeaderButton>
                </HeaderButtonWrapper>
            </HeaderContainer>
            <CustomNavbar activeItem={activeItem} onMouseEnter={(item) => setActiveItem(item)}
                          onMouseLeave={(item) => setActiveItem(item)} onMouseClick={() => {}}/>



            <Body>
                {children}
            </Body>
            {ui?.isLoading && <CustomSpinner/>}

        </Wrapper>

    )


};


export default Layout;