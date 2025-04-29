import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;

    margin: 0 auto;
    padding: 4rem 2rem;


    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const SearchByTitle = styled.div`
    justify-content: left;
    width: inherit;
    min-width: 1300px;

    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SearchResultItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;