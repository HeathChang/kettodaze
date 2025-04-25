import { NavbarContainer, NavbarItem, NavbarList } from "./CustomNavbar.styled";
import { eNavList } from "../../types/types";
import { isEmpty } from "../../common/util";

interface iCustomNavbar {
    activeItem: string,
    onMouseEnter: (params?: any) => void,
    onMouseLeave: (params?: any) => void
    onMouseClick: (params?: any) => void
}

const CustomNavbar = (props: iCustomNavbar) => {

    return (
        <NavbarContainer>
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