import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //min-height: 100vh;
    padding: 12rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
`;

export const LoginCard = styled.div`
    width: 100%;
    max-width: 420px;
    padding: 2.5rem;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;

    img {
        border-radius: 12px;
    }
`;

export const LoginHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: #333;
        margin-bottom: 0.5rem;
    }

    p {
        color: #666;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const InputLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #555;
`;

export const InputWrapper = styled.div`
    position: relative;
    .input-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
    }

    .toggle-password {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: #aaa;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;

        &:hover {
            color: #666;
        }
    }
`;

interface StyledInputProps {
    hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
    width: 100%;
    padding: 0.75rem 3.5rem;
    border: 1px solid ${(props) => (props.hasError ? "#e53935" : "#ddd")};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.hasError ? "#e53935" : "#ff6b6b")};
        box-shadow: 0 0 0 2px ${(props) => (props.hasError ? "rgba(229, 57, 53, 0.1)" : "rgba(255, 107, 107, 0.1)")};
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const ErrorMessage = styled.span`
    color: #e53935;
    font-size: 0.8rem;
    margin-top: -0.25rem;
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 0.85rem;
    
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 0.5rem;

    &:hover {
        background-color: #fa5252;
    }

    &:active {
        transform: translateY(1px);
    }
`;

export const ForgotPassword = styled.a`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    
    color: #666;
    text-decoration: none;
    margin-top: 0.5rem;

    &:hover {
        color: #ff6b6b;
        text-decoration: underline;
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    &::before,
    &::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #eee;
    }

    span {
        padding: 0 1rem;
        color: #999;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
`;

export const SocialLoginSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const SocialButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &.github {
        background-color: #24292e;
        color: white;

        &:hover {
            background-color: #1a1e22;
        }
    }

    &.twitter {
        background-color: #1da1f2;
        color: white;

        &:hover {
            background-color: #1a91da;
        }
    }
`;

export const RegisterLink = styled.div`
    text-align: center;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: #666;

    span {
        color: #ff6b6b;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
