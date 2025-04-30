import styled, { css } from "styled-components";


export const NavbarContainer = styled.div`
    text-align: center;
    width: 100%;
    background: white;
    padding: 10px 0 10px 0;

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

interface NavbarItemProps {
    isActive?: boolean;
    isSelected?: boolean;
}

export const NavbarItem = styled.li<NavbarItemProps>`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.md};

    ${({ isSelected = false, theme }) => isSelected &&
            css`
                color: ${theme.colors.error};
                font-weight: ${theme.fontWeights.bold};
            `
    };


    ${({ isActive = false }) => isActive &&
            css`
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: ${({ theme }) => theme.colors.primary
                    }
            `};
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        padding: 10px;
        margin: 0 10px;

        &:active {
            opacity: 0.7;
        }

        ${({ isActive }) =>
                isActive &&
                css`
                    color: #d32f2f;
                    background-color: transparent;
                    border-radius: 0;

                    &:after {
                        height: 3px;
                    }
                `};
    }
`;