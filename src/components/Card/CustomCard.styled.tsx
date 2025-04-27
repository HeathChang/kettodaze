import styled from "styled-components";
import { ImgHTMLAttributes } from "react";


export const CardWrapper = styled.div`
    color: black;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const HeaderText = styled.h2`
    color: black;
    text-align: left;
    width: inherit;
    margin-top: 0;
`;


export const CardContainer = styled.div`
    border: 0.5px solid lightgray;
    text-align: center;
    padding: 16px;
    background-color: white;
    height: max-content;
    width: auto;
    border-radius: 8px;
    
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
`;


export const CardImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    width: 200px;
    height: 200px;

    border-radius: 8px;
    border: 0.5px solid lightgray;
    cursor: pointer;


    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

`;
export const CardHeader = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: inherit;
`;

export const CardTitle = styled.span`
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CardIcon = styled.div`
    font-size: 8px;
    align-content: center;
`;

export const CardBody = styled.div`
    height: max-content;
    width: inherit;
`;


export const CardDesc = styled.span`
    height: 24px;
    margin-bottom: 8px;

    font-size: 10px;
    text-align: left;
    font-weight: 400;
    display: -webkit-box; /* Flexbox처럼 작동하도록 설정 */
    -webkit-line-clamp: 2; /* 표시할 최대 줄 수 */
    -webkit-box-orient: vertical; /* 수직 박스 방향 설정 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 부분을 "..."로 표시 */
`;

export const CardPrice = styled.div`
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    width: inherit;
    display: flex;
    justify-content: space-between;
`;

