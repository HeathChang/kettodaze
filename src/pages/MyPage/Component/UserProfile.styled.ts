import styled from "styled-components";

export const UserProfileWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #f1f3f5;
`;

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .edit-avatar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 0.8rem;
        padding: 0.25rem;
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        gap: .5rem;
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }
        
        span{
            font-size: ${({ theme }) => theme.fontSizes.xxs};

        }
    }
`;

export const UserName = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

export const UserEmail = styled.p`
    font-size: 0.9rem;
    color: #868e96;
    margin-bottom: 1rem;
`;