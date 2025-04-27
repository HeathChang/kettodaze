import styled from "styled-components";
import { MOBILE_WIDTH } from "../../common/constant";


export const SearchInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;

    flex: 1.5;
    justify-content: center;
    margin: 0 1rem;
    

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 90%;
        flex: none;
    }
`;

export const SearchInputBox = styled.input`
    width: auto;
    min-width: 300px;
    height: 40px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 0 5rem 0 3rem; 
    font-size: 14px;
    color: #333;
    transition: all 0.2s ease;
    flex: 1 1 0;

    &:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }

    &::placeholder {
        color: #aaa;
    }

    /* Media query for mobile devices */
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 200px;
        font-size: 16px; 
    }
`;


export const SearchIconBox = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon{
        z-index: 1000;

    }

    /* If you want the icon to be clickable, use this instead */
    /* 
    cursor: pointer;
    pointer-events: auto;
    */
`;
