import styled from "styled-components";

export const MyPageContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
`;
export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f8f9fa;
`;

export const Header = styled.header`
    background-color: white;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    h1 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #333;
    }

    img {
        border-radius: 8px;
    }
`;

export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: #ff6b6b;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const Sidebar = styled.div`
    width: 280px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    height: fit-content;

    @media (max-width: 768px) {
        width: 100%;
    }
`;



export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const MenuItem = styled.li<{ active?: boolean }>`
    padding: 0;

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        padding: 1rem 1.5rem;
        background-color: ${(props) => (props.active ? "#fff0f0" : "transparent")};
        color: ${(props) => (props.active ? "#ff6b6b" : "#495057")};
        border: none;
        text-align: left;
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background-color: ${(props) => (props.active ? "#fff0f0" : "#f8f9fa")};
            color: ${(props) => (props.active ? "#ff6b6b" : "#ff6b6b")};
        }

        svg {
            color: ${(props) => (props.active ? "#ff6b6b" : "#adb5bd")};
        }
    }
`;

export const MainContent = styled.div`
    flex: 1;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
`;

export const ContentHeader = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid #f1f3f5;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        
        margin-bottom: 0.5rem;
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        font-weight: ${({ theme }) => theme.fontWeights.light};
        color: #868e96;
    }
`;

export const ContentBody = styled.div`
    padding: 1.5rem;
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: 0.5rem;
    color: #495057;
    float: left;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};


    &:focus {
        outline: none;
        border-color: #ff6b6b;
        box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.1);
    }
`;

export const FormSelect = styled.select`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;

    &:focus {
        outline: none;
        border-color: #ff6b6b;
        box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.1);
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: right;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>`
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: ${(props) => {
        if (props.variant === "secondary") return "#f1f3f5";
        if (props.variant === "danger") return "#fff0f0";
        return "#ff6b6b"; // primary (default)
    }};

    color: ${(props) => {
        if (props.variant === "secondary") return "#495057";
        if (props.variant === "danger") return "#e03131";
        return "white"; // primary (default)
    }};

    border: ${(props) => {
        if (props.variant === "secondary") return "1px solid #ddd";
        if (props.variant === "danger") return "1px solid #ffc9c9";
        return "none"; // primary (default)
    }};

    &:hover {
        background-color: ${(props) => {
            if (props.variant === "secondary") return "#e9ecef";
            if (props.variant === "danger") return "#ffe3e3";
            return "#fa5252"; // primary (default)
        }};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;

    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`;

export const ItemCard = styled.div`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .favorite-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        svg {
            color: #ff6b6b;
        }
    }
`;

export const ItemImage = styled.div`
    height: 160px;
    background-color: #f1f3f5;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ItemInfo = styled.div`
    padding: 1rem;
    background-color: white;
`;

export const ItemName = styled.h3`
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #333;
`;

export const ItemPrice = styled.p`
    font-size: 0.9rem;
    color: #ff6b6b;
    font-weight: 500;
`;

export const ItemCategory = styled.span`
    font-size: 0.8rem;
    color: #868e96;
    display: block;
    margin-top: 0.25rem;
`;

export const EmptyState = styled.div`
    padding: 3rem 1rem;
    text-align: center;
    color: #868e96;

    svg {
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.9rem;
        max-width: 400px;
        margin: 0 auto;
    }
`;

export const ActivityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ActivityItem = styled.div`
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #f1f3f5;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
        background-color: #f8f9fa;
    }

    .icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background-color: #fff0f0;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: #ff6b6b;
        }
    }
`;

export const ActivityContent = styled.div`
    flex: 1;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        
        margin-bottom: 0.25rem;
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: #868e96;
    }
`;

export const ActivityTime = styled.div`
    font-size: 0.8rem;
    color: #adb5bd;
    white-space: nowrap;
`;

export const TabGroup = styled.div`
    display: flex;
    border-bottom: 1px solid #f1f3f5;
    margin-bottom: 1.5rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const Tab = styled.button<{ active?: boolean }>`
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 2px solid ${(props) => (props.active ? "#ff6b6b" : "transparent")};
    color: ${(props) => (props.active ? "#ff6b6b" : "#868e96")};
    font-size: 0.95rem;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        color: ${(props) => (props.active ? "#ff6b6b" : "#495057")};
    }
`;

export const NotificationItem = styled.div`
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #f1f3f5;
    margin-bottom: 1rem;

    &:hover {
        background-color: #f8f9fa;
    }

    &.unread {
        border-left: 3px solid #ff6b6b;
    }
`;

export const NotificationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
    }

    .time {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: #adb5bd;
    }
`;

export const NotificationContent = styled.p`
    font-size: 0.9rem;
    color: #495057;
    margin-bottom: 0.5rem;
`;

export const NotificationActions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    button {
        background: none;
        border: none;
        font-size: 0.85rem;
        color: #868e96;
        cursor: pointer;
        padding: 0;

        &:hover {
            color: #ff6b6b;
            text-decoration: underline;
        }
    }
`;

export const ToggleSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + span {
            background-color: #ff6b6b;
        }

        &:checked + span:before {
            transform: translateX(24px);
        }
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #e9ecef;
        transition: 0.4s;
        border-radius: 24px;

        &:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
        }
    }
`;

export const SettingItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f3f5;

    &:last-child {
        border-bottom: none;
    }

    .setting-info {
        h4 {
            font-size: 0.95rem;
            font-weight: 500;
            margin-bottom: 0.25rem;
        }

        p {
            font-size: 0.85rem;
            color: #868e96;
        }
    }
`;

export const DangerZone = styled.div`
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: #fff5f5;
    border: 1px solid #ffc9c9;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #e03131;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.9rem;
        color: #495057;
        margin-bottom: 1rem;
    }
`;

export const ConfirmationModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

export const ModalContent = styled.div`
    background-color: white;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.95rem;
        color: #495057;
        margin-bottom: 1.5rem;
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
`;
