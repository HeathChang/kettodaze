import styled from "styled-components";

export const ProductContainer = styled.div`
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


export const ProductHeader = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ProductImageGallery = styled.div`
    flex: 1;
    max-width: 500px;
    margin-right: 1rem;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const MainImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
    cursor: pointer;
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
`;

interface ThumbnailProps {
    active?: boolean;
}

export const ThumbnailImage = styled.img<ThumbnailProps>`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid ${(props) => (props.active ? "#4a90e2" : "transparent")};
    transition: border-color 0.2s ease;

    &:hover {
        border-color: ${(props) => (props.active ? "#4a90e2" : "#ddd")};
    }
`;

export const ProductInfo = styled.div`
    flex: 1;
`;

export const ProductTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    margin: 0 0 1rem;
    color: #333;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const ProductRating = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1rem;

    span {
        margin-left: 0.5rem;
        font-weight: 500;
    }

    .reviews {
        color: #666;
        font-weight: normal;
        margin-left: 0.25rem;
    }
`;

export const ProductLocation = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #666;
    margin-bottom: 1rem;
`;

export const ProductPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1rem 0;

    .price {
        margin-left: auto;
        font-size: 1.5rem;
        font-weight: 600;
        color: #e53935;
    }


`;

export const Badge = styled.span`
    background-color: #e53935;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    gap: 1rem;
    cursor: pointer;
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid #eee;
    margin: 1.5rem 0;
`;

export const DeliveryInfo = styled.div`
    h4 {
        margin: 0 0 0.75rem;
        //font-size: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
`;

export const DeliveryOption = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    h5 {
        margin: 0 0 0.25rem;
        font-size: 0.9rem;
    }

    p {
        margin: 0;
        font-size: 0.85rem;
        color: #666;
    }
`;

export const QuantitySelector = styled.div`
    display: flex;
    align-items: center;
    max-width: 120px;
    margin-top: 0.5rem;
`;

export const QuantityButton = styled.button`
    width: 32px;
    height: 32px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;

    &:first-child {
        border-radius: 4px 0 0 4px;
    }

    &:last-child {
        border-radius: 0 4px 4px 0;
    }

    &:hover {
        background: #eee;
    }
`;

export const QuantityInput = styled.input`
    width: 40px;
    height: 32px;
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    text-align: center;
    font-size: 0.9rem;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const ProductActions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

interface ButtonProps {
    primary?: boolean;
}

export const ActionButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    background-color: ${(props) => (props.primary ? "#4a90e2" : "white")};
    color: ${(props) => (props.primary ? "white" : "#333")};
    border: 1px solid ${(props) => (props.primary ? "#4a90e2" : "#ddd")};

    &:hover {
        background-color: ${(props) => (props.primary ? "#3a7bc8" : "#f5f5f5")};
    }

    @media (max-width: 768px) {
        flex: ${(props) => (props.primary ? "1 0 100%" : "1 0 calc(50% - 0.5rem)")};
    }
`;

export const ProductTabs = styled.div`
    display: flex;
    //border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
    border: 1px solid blue;


    @media (max-width: 768px) {
        overflow-x: auto;
        white-space: nowrap;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

interface TabProps {
    active?: boolean;
}

export const TabButton = styled.button<TabProps>`
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 2px solid ${(props) => (props.active ? "#4a90e2" : "transparent")};
    color: ${(props) => (props.active ? "#4a90e2" : "#666")};
    font-weight: ${(props) => (props.active ? "600" : "400")};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #4a90e2;
    }
`;

export const ProductContent = styled.div`
    margin-bottom: 3rem;
    padding: 2rem;
    width: 100%;
    min-width: calc(600px + 1rem);
`;

export const ProductDescription = styled.div`
    line-height: 1.6;
    color: #444;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 1rem;
    }
`;

export const RelatedProductsSection = styled.div`
    margin-top: 3rem;
    padding: 2rem;
`;

export const RelatedProductsTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const RelatedProductsGrid = styled.div`
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

export const SellersHint = styled.span`
    margin-top: 1rem;
`;

export const SellersList = styled.div`
    margin-bottom: 3rem;
    width: 100%;
    padding: 2rem;
    @media (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const SellersListBox = styled.div`
    display: flex;
    flex-direction: row;
    //height: 400px;
    gap: 1rem;
    height: auto;
    min-height: 400px;
    min-width: calc(600px + 1rem);

`;

export const SellersListTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
    color: #333;
`;

export const SellersListMap = styled.div`
    //width: 100%;
    height: 100%;
    flex: 1;
    //height: inherit;
    min-height: 400px;
    min-width: 400px;
    border: .5px solid lightgray;
    border-radius: 1rem;
`;


export const SellersListContainer = styled.div`
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    max-height: 400px;
    min-width: 200px;

    overflow-y: auto;
    width: 100%;
    flex: 1.5;
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    
 
`;

export const SellerHeader = styled.div`
    display: flex;
    background-color: #f9f9f9;
    padding: 1rem;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #eee;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SellerHeaderItem = styled.div<{flex ?: any}>`
    color: #555;
    font-size: 0.9rem;
    flex: ${({ flex }) => flex || '1'};
`;

export const SellerItem = styled.div`
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s ease;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #f5f9ff;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const SellerBodyItem = styled.div<{
    flex?: string;
    color?: string;
}>`
    flex: ${({ flex }) => flex || '1'};
    font-weight: 500;
    display: flex;
    align-items: center;
    color: ${({ color }) => color || '#333'};

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

