import { NavbarContainer, NavbarItem, NavbarList } from "./CustomNavbar.styled";
import { eNavList } from "../../types/types";
import { isEmpty } from "../../common/util";
import Icon from "../Icon/custom-icon";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface iCustomNavbar {
    activeItem: string,
    onMouseEnter: (params?: any) => void,
    onMouseLeave: (params?: any) => void,
    onMouseClick: (params?: any) => void,
    visible: boolean,
}


const CustomNavbar = (props: iCustomNavbar) => {
    const { isMobile } = useSelector((state: RootState) => state.ui);

    return (
        <NavbarContainer style={{
            display: (!isMobile || props.visible) ? '' : 'none',
            ...(isMobile && {
                position: 'absolute',
                top: '10%',
                display: props.visible ? '' : 'none',
            })
        }}>
            <NavbarList>
                {Object.values(eNavList).map((item, index) => (
                    !isEmpty(item) &&
					<NavbarItem key={index}
								isActive={item === props.activeItem}
								onMouseOver={() => props.onMouseEnter(item)}
								onMouseLeave={() => props.onMouseLeave()}
								onClick={() => props.onMouseClick(item)}
					>{item}
					</NavbarItem>
                ))}
            </NavbarList>
        </NavbarContainer>
    );
};


export default CustomNavbar;