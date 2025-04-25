import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Body, Header, HeaderFont, Wrapper } from "./Layout.styled";
import { ReactNode, useState } from "react";
import CustomSpinner from "../Spinner/custom-spinner";
import Icon from "../Icon/custom-icon";
import CustomNavbar from "../Navbar/CustomNavbar";


interface iLayout {
    children: ReactNode;
}

const Layout = ({ children }: iLayout) => {
    const navigate = useNavigate();
    const ui = useSelector((state: RootState) => state.ui);
    const [activeItem, setActiveItem] = useState<string>('인기 갓챠');

    const handleBack = () => {

    }

    return (
        <Wrapper>
            {ui?.isLoading && <CustomSpinner/>}
            {
                ui?.isHeaderVisible && (
                    <Header>
                        <Icon icon="IconBack" onClick={handleBack}/>
                        <HeaderFont>{ui?.header}</HeaderFont>
                    </Header>
                )
            }
            <CustomNavbar activeItem={activeItem} onMouseEnter={()=> {}} onMouseLeave={()=> {}} onMouseClick={() => {}}/>



            <Body>
                {children}
            </Body>
        </Wrapper>
    )


};


export default Layout;