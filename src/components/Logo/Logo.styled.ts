import styled, { keyframes } from "styled-components";


const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const LogoContainer = styled.div`
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