import styled from "styled-components"

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
`

export const SignInCard = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  img {
    border-radius: 12px;
  }
`

export const SignInHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
  }
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
`

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
`

export const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 2.5rem;
  border: 1px solid ${(props) => (props.hasError ? "#e53935" : "#ddd")};
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#e53935" : "#ff6b6b")};
    box-shadow: 0 0 0 2px ${(props) => (props.hasError ? "rgba(229, 57, 53, 0.1)" : "rgba(255, 107, 107, 0.1)")};
  }
  
  &::placeholder {
    color: #aaa;
  }
`

export const ErrorMessage = styled.span`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: -0.25rem;
`

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #fa5252;
  }
  
  &:active {
    transform: translateY(1px);
  }
`

export const BackToLogin = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ff6b6b;
  }
`

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`

export const StepCircle = styled.div<{ active: boolean; completed?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: ${(props) => (props.active ? "#ff6b6b" : "#f1f3f5")};
  color: ${(props) => (props.active ? "white" : "#adb5bd")};
  transition: all 0.3s ease;
`

export const StepConnector = styled.div<{ active: boolean }>`
  height: 2px;
  width: 40px;
  background-color: ${(props) => (props.active ? "#ff6b6b" : "#f1f3f5")};
  transition: background-color 0.3s ease;
`

export const SelectWrapper = styled.div`
  position: relative;
  
  .select-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    z-index: 1;
  }
`

export const StyledSelect = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 2.5rem;
  border: 1px solid ${(props) => (props.hasError ? "#e53935" : "#ddd")};
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#e53935" : "#ff6b6b")};
    box-shadow: 0 0 0 2px ${(props) => (props.hasError ? "rgba(229, 57, 53, 0.1)" : "rgba(255, 107, 107, 0.1)")};
  }
  
  &::placeholder {
    color: #aaa;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;
    flex-shrink: 0;
    margin-top: 2px;
    
    &.checked {
      background-color: #ff6b6b;
      border-color: #ff6b6b;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
    strong {
      font-size: 0.9rem;
      color: #333;
    }
    
    p {
      font-size: 0.8rem;
      color: #666;
      margin: 0;
    }
  }
`

export const TermsLink = styled.a`
  font-size: 0.8rem;
  color: #ff6b6b;
  text-decoration: none;
  margin-top: 0.25rem;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`
