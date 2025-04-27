import styled, { keyframes } from "styled-components"
import { MOBILE_WIDTH } from "../../common/constant";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 1160px;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        min-width: 100%;
        width: 100%;
        overflow-x: hidden;
    }
`

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 6.5rem;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0.75rem;
        min-height: auto;
        gap: 1rem;
    }
`

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const Logo = styled.div`
    position: relative;
    width: 230px;
    cursor: pointer;
    flex: 0.5;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 180px;
        margin-bottom: 0.5rem;
    }

    h1 {
        width: 100%;
        color: transparent;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;

        /* Awesome font styling */
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 2rem;
        letter-spacing: 1px;
        text-transform: uppercase;

        /* Gradient text effect */
        background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #ff6b6b);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;

        /* Text shadow for depth */
        text-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

        /* Animation */
        animation: ${shimmer} 6s linear infinite;

        /* Hover effect */
        transition: transform 0.3s ease, text-shadow 0.3s ease;

        &:hover {
            transform: scale(1.05);
            text-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        }
        
        /* Media query for mobile devices */
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`

export const SearchInputWrapper = styled.div`
    flex: 2;
    display: flex;
    gap: 1rem;
    justify-content: center;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 100%;
        flex: none;
    }
`

export const SearchInputBox = styled.input`
    width: 500px;
    height: 40px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 0 16px 0 36px;
    font-size: 14px;
    color: #333;
    transition: all 0.2s ease;
    
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
        width: 300px;
        font-size: 16px; /* Better for touch input */
    }
`

export const SearchIconBox = styled.div`
    height: 40px;
    align-content: center;
    margin-top: 4px;
    cursor: pointer;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin-top: 0;
        display: flex;
        align-items: center;
    }
`

export const HeaderButtonWrapper = styled.ul`
    padding-left: 0;
    display: flex;
    flex: 1;
    justify-content: right;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        display: none;
        width: 100%;
        justify-content: center;
        margin-top: 0.5rem;
        padding: 0;
    }
`

export const HeaderButton = styled.li`
    list-style-type: none;
    
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 40px;
    gap: 40px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        width: 500px;
        margin-right: 0;
        gap: 20px;
        justify-content: center;
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`

export const HeaderFont = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    flex: 2;
    text-align: center;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        flex: none;
        width: 100%;
        margin: 0.5rem 0;
    }
`

export const Body = styled.main`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    color: #333;
    min-width: 450px;
    height: 100%;
    overflow: hidden;
    
    /* Media query for mobile devices */
    @media (max-width: 768px) {
        min-width: 100%;
        overflow-y: auto;
        padding: 0 1rem;
    }
    
    /* Additional media query for very small devices */
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`
