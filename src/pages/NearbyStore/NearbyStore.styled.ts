import styled from "styled-components";



export const NearbyStoreContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
`

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
`

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
`

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 1rem;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.95rem;
    
    &:focus {
      outline: none;
      border-color: #ff6b6b;
      box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.1);
    }
  }
  
  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }
`

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
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MapSection = styled.div`
  flex: 1;
  min-height: 500px;
  background-color: #e9ecef;
  position: relative;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`

export const MapPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #868e96;
  
  svg {
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    text-align: center;
  }
`

export const StoreListSection = styled.div`
  width: 400px;
  background-color: white;
  border-left: 1px solid #e9ecef;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid #e9ecef;
  }
`

export const StoreListHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #868e96;
    font-size: 0.9rem;
  }
`

export const FilterSection = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const FilterButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  white-space: nowrap;
  background-color: ${(props) => (props.active ? "#ff6b6b" : "#f1f3f5")};
  color: ${(props) => (props.active ? "white" : "#495057")};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#fa5252" : "#e9ecef")};
  }
`

export const StoreList = styled.div`
  padding: 0.5rem 0;
`

export const StoreCard = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f3f5;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
`

export const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .distance {
    font-size: 0.9rem;
    color: #ff6b6b;
    font-weight: 500;
  }
`

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  p {
    font-size: 0.9rem;
    color: #495057;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: #adb5bd;
      flex-shrink: 0;
    }
  }
`

export const StoreRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
  
  .stars {
    color: #fcc419;
    display: flex;
  }
  
  span {
    font-size: 0.9rem;
    color: #495057;
  }
`

export const NoStores = styled.div`
  padding: 2rem;
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
  }
`

export const LoadingIndicator = styled.div`
  padding: 2rem;
  text-align: center;
  color: #868e96;
  
  .spinner {
    margin-bottom: 1rem;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  p {
    font-size: 0.9rem;
  }
`

export const CurrentLocationButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  svg {
    color: #495057;
  }
`
