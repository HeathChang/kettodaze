import styled from "styled-components";
import { ImgHTMLAttributes } from "react";


export const CardContainer = styled.div`
    border: 0.5px solid lightgray;
    text-align: center;
    padding: 1rem;
    background-color: white;
    width: 250px;
    max-width: 250px;
    min-width: 220px;
    height: max-content;

    border-radius: 8px;

    &:hover {
        //transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

`;


export const CardImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    width: 220px;
    height: 220px;

    border-radius: 8px;
    border: 0.5px solid lightgray;
    cursor: pointer;


`;
export const CardHeader = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;

`;

export const CardTitle = styled.span`
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    display: -webkit-box; /* Flexbox처럼 작동하도록 설정 */
    -webkit-line-clamp: 2; /* 표시할 최대 줄 수 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

`;


export const CardBody = styled.div`
    height: max-content;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
`;

export const CardIcon = styled.div`
    align-content: center;
    //border: .2px solid lightgray;
    justify-items: center;
    cursor: pointer;
`;


export const CardDesc = styled.span`
    height: 24px;
    margin-bottom: 8px;

    font-size: 10px;
    text-align: left;
    font-weight: 400;
    display: -webkit-box; /* Flexbox처럼 작동하도록 설정 */
    -webkit-line-clamp: 2; /* 표시할 최대 줄 수 */
    -webkit-box-orient: vertical;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CardPrice = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    justify-content: right;
    width: inherit;
    display: flex;
`;

