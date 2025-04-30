import {
    Divider,
    ErrorMessage, ForgotPassword,
    InputGroup,
    InputLabel,
    InputWrapper,
    LoginCard,
    LoginContainer,
    LoginForm,
    LoginHeader,
    LogoContainer, RegisterLink, StyledButton,
    StyledInput
} from "./Login.styled";
import { Eye, EyeOff, Mail, Lock, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });

    const navigate = useNavigate();


    return (
        <LoginContainer>
            <LoginCard>
                <LogoContainer><Logo onClick={() => navigate("/")}/></LogoContainer>

                <LoginHeader>
                    <h1>kettodaze에 오신 것을 환영합니다</h1>
                    <p>일본 가챠 매장을 찾는 가장 쉬운 방법</p>
                </LoginHeader>

                <LoginForm onSubmit={() => {}}>
                    <InputGroup>
                        <InputLabel>이메일</InputLabel>
                        <InputWrapper>
                            <Mail size={18} className="input-icon"/>
                            <StyledInput
                                type="email"
                                placeholder="이메일 주소를 입력하세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                hasError={!!errors.email}
                            />
                        </InputWrapper>
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </InputGroup>

                    <InputGroup>
                        <InputLabel>비밀번호</InputLabel>
                        <InputWrapper>
                            <Lock size={18} className="input-icon"/>
                            <StyledInput
                                type={showPassword ? "text" : "password"}
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                hasError={!!errors.password}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => {
                                }}
                                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                            >
                                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </button>
                        </InputWrapper>
                        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                    </InputGroup>

                    <StyledButton type="submit">로그인</StyledButton>

                    <ForgotPassword href="#" >비밀번호를 잊으셨나요?</ForgotPassword>
                </LoginForm>

                <Divider>
                    <span>또는</span>
                </Divider>


                <RegisterLink>
                    계정이 없으신가요? <a href="#" onClick={() => navigate("/")}>회원가입</a>
                </RegisterLink>
            </LoginCard>
        </LoginContainer>
    );
};

export default Login;