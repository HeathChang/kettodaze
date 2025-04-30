import { NavbarContainer, NavbarItem, NavbarList } from "./CustomNavbar.styled";
import { eNavList } from "../../types/types";
import { isEmpty } from "../../common/util";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useSearchParams } from "react-router-dom";

interface iCustomNavbar {
    activeItem: string,
    onMouseEnter: (params?: any) => void,
    onMouseLeave: (params?: any) => void,
    onMouseClick: (params?: any) => void,
    visible: boolean,
}


const CustomNavbar = (props: iCustomNavbar) => {
    const { isMobile } = useSelector((state: RootState) => state.ui);
    const [searchParams] = useSearchParams();
    const searchBy = searchParams.get('searchBy');

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
                {Object.entries(eNavList).map(([item, value], index) => (
                    !isEmpty(item) &&
					<NavbarItem key={index}
								isActive={item === props.activeItem}
                                isSelected={!isEmpty(searchBy) && item === searchBy?.toUpperCase()}
								onMouseOver={() => props.onMouseEnter(item)}
								onMouseLeave={() => props.onMouseLeave()}
								onClick={() => props.onMouseClick(value)}
					>{value}
					</NavbarItem>
                ))}
            </NavbarList>
        </NavbarContainer>
    );
};


export default CustomNavbar;