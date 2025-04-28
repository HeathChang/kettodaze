import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;


`;




export const HomeBodyBox = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 2rem 4rem 3rem 4rem;
    background-color: ${(props) => props.theme.colors.white};
`;

export const HomeBodyTitle = styled.div`
    justify-content: left;
    width: inherit;
    min-width: 1300px;

    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;


export const HomeBodyContent = styled.div`
    //justify-content: center;
    //border-radius: 8px;
    //text-align: center;
    width: inherit;
    min-width: 1300px;
    //color: black;
    justify-items: center;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    //gap: 2rem;

`;


export const HomeFooter = styled.div`
    flex: 1;
    width: 100%;
`;