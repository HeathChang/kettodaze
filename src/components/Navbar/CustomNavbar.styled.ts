import styled, { css } from "styled-components";

interface NavbarItemProps {
    isActive: boolean;
}

export const NavbarContainer = styled.div`
    text-align: center;
    width: 100%;
    background: white;
    padding: 10px 0 10px 0;
    border: 1px solid red;

    @media (max-width: 768px) {
        padding: 5px 0;
    }
`;

export const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 0;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
    }
`;

export const NavbarItem = styled.li<NavbarItemProps>`
    padding: 10px;
    cursor: pointer;

    ${({ isActive }) => isActive &&
            css`
                background-color: red;
                color: white;
                border-radius: 4px;
            `
    };
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        padding: 12px 10px;
        margin: 0 10px;

        /* Make tap targets larger on mobile */
        &:active {
            opacity: 0.7;
        }

        ${({ isActive }) =>
                isActive &&
                css`
                    background-color: red;
                    color: white;
                    border-radius: 4px;
                `}
    }
`;