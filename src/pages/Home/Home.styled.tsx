import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem
`;


export const HomeBody = styled.div`
    flex: 1;
    width: 100%;
    height: 400px;
    border: 1px solid red;
`;
export const CardListContainer = styled.div`
    border-radius: 8px;
    text-align: center;
    width: inherit;
    //padding: 24px 24px;
    color: black;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;




export const HomeFooter = styled.div`
    flex: 1;
    width: 100%;
`;