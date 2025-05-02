import type React from "react";

import { useState } from "react";
import {
    SignInContainer,
    SignInCard,
    SignInHeader,
    SignInForm,
    InputGroup,
    StyledInput,
    StyledButton,
    LogoContainer,
    ErrorMessage,
    InputLabel,
    InputWrapper,
    BackToLogin,
    StepIndicator,
    StepCircle,
    StepConnector,
    CheckboxContainer,
    StyledCheckbox,
    CheckboxLabel,
    TermsLink,
    SelectWrapper,
    StyledSelect,
} from "./SignIn.styled";
import { ArrowLeft, ArrowRight, Check, Mail, Lock, User, MapPin, Calendar, Eye, EyeOff } from 'lucide-react';
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";

interface SignInPageProps {

}

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    nickname: string;
    birthYear: string;
    region: string;
    agreeTerms: boolean;
    agreePrivacy: boolean;
    agreeMarketing: boolean;
}

const initialFormData: FormData = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    nickname: "",
    birthYear: "",
    region: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
};

const initialErrors = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    nickname: "",
    birthYear: "",
    region: "",
    agreeTerms: "",
    agreePrivacy: "",
};

const regionsArr = [
    "서울",
    "부산",
    "인천",
    "대구",
    "대전",
    "광주",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
];

const birthYears = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i - 10);

const SignIn = (props: SignInPageProps) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateStep1 = () => {
        const newErrors = { ...initialErrors };
        let valid = true;

        if (!formData.email) {
            newErrors.email = "이메일을 입력해주세요";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "비밀번호를 입력해주세요";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "비밀번호는 6자 이상이어야 합니다";
            valid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "비밀번호 확인을 입력해주세요";
            valid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const validateStep2 = () => {
        const newErrors = { ...initialErrors };
        let valid = true;

        if (!formData.username) {
            newErrors.username = "이름을 입력해주세요";
            valid = false;
        }

        if (!formData.nickname) {
            newErrors.nickname = "닉네임을 입력해주세요";
            valid = false;
        }

        if (!formData.birthYear) {
            newErrors.birthYear = "출생년도를 선택해주세요";
            valid = false;
        }

        if (!formData.region) {
            newErrors.region = "지역을 선택해주세요";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const validateStep3 = () => {
        const newErrors = { ...initialErrors };
        let valid = true;

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "이용약관에 동의해주세요";
            valid = false;
        }

        if (!formData.agreePrivacy) {
            newErrors.agreePrivacy = "개인정보 처리방침에 동의해주세요";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) {
            setStep(2);
        } else if (step === 2 && validateStep2()) {
            setStep(3);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate("/login");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 3 && validateStep3()) {
            // Handle sign-in submission
            console.log("Sign-in submitted:", formData);
            // Here you would typically send the data to your API
            alert("회원가입이 완료되었습니다!");
            navigate("/login");
        }
    };

    return (
        <SignInContainer>
            <SignInCard>
                <LogoContainer><Logo onClick={() => navigate("/")}/></LogoContainer>


                <BackToLogin onClick={handlePrev}>
                    <ArrowLeft size={16}/>
                </BackToLogin>

                <SignInHeader>
                    <h1>회원가입</h1>
                    <p>kettodaze 서비스 이용을 위한 계정을 만들어보세요</p>
                </SignInHeader>

                <StepIndicator>
                    <StepCircle active={step >= 1} completed={step > 1}>
                        {step > 1 ? <Check size={16}/> : "1"}
                    </StepCircle>
                    <StepConnector active={step > 1}/>
                    <StepCircle active={step >= 2} completed={step > 2}>
                        {step > 2 ? <Check size={16}/> : "2"}
                    </StepCircle>
                    <StepConnector active={step > 2}/>
                    <StepCircle active={step >= 3}>{step > 3 ? <Check size={16}/> : "3"}</StepCircle>
                </StepIndicator>

                <SignInForm onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <InputGroup>
                                <InputLabel>이메일</InputLabel>
                                <InputWrapper>
                                    <Mail size={18} className="input-icon"/>
                                    <StyledInput
                                        type="email"
                                        name="email"
                                        placeholder="이메일 주소를 입력하세요"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        name="password"
                                        placeholder="비밀번호를 입력하세요 (6자 이상)"
                                        value={formData.password}
                                        onChange={handleChange}
                                        hasError={!!errors.password}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                                    >
                                        {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>
                                </InputWrapper>
                                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                            </InputGroup>

                            <InputGroup>
                                <InputLabel>비밀번호 확인</InputLabel>
                                <InputWrapper>
                                    <Lock size={18} className="input-icon"/>
                                    <StyledInput
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="비밀번호를 다시 입력하세요"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        hasError={!!errors.confirmPassword}
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label={showConfirmPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                                    >
                                        {showConfirmPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>
                                </InputWrapper>
                                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                            </InputGroup>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <InputGroup>
                                <InputLabel>이름</InputLabel>
                                <InputWrapper>
                                    <User size={18} className="input-icon"/>
                                    <StyledInput
                                        type="text"
                                        name="username"
                                        placeholder="실명을 입력하세요"
                                        value={formData.username}
                                        onChange={handleChange}
                                        hasError={!!errors.username}
                                    />
                                </InputWrapper>
                                {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                            </InputGroup>

                            <InputGroup>
                                <InputLabel>닉네임</InputLabel>
                                <InputWrapper>
                                    <User size={18} className="input-icon"/>
                                    <StyledInput
                                        type="text"
                                        name="nickname"
                                        placeholder="사용할 닉네임을 입력하세요"
                                        value={formData.nickname}
                                        onChange={handleChange}
                                        hasError={!!errors.nickname}
                                    />
                                </InputWrapper>
                                {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
                            </InputGroup>

                            <InputGroup>
                                <InputLabel>출생년도</InputLabel>
                                <SelectWrapper>
                                    <Calendar size={18} className="select-icon"/>
                                    <StyledSelect
                                        name="birthYear"
                                        value={formData.birthYear}
                                        onChange={handleChange}
                                        hasError={!!errors.birthYear}
                                    >
                                        <option value="">출생년도 선택</option>
                                        {birthYears.map((year) => (
                                            <option key={year} value={year}>
                                                {year}년
                                            </option>
                                        ))}
                                    </StyledSelect>
                                </SelectWrapper>
                                {errors.birthYear && <ErrorMessage>{errors.birthYear}</ErrorMessage>}
                            </InputGroup>

                            <InputGroup>
                                <InputLabel>지역</InputLabel>
                                <SelectWrapper>
                                    <MapPin size={18} className="select-icon"/>
                                    <StyledSelect
                                        name="region"
                                        value={formData.region}
                                        onChange={handleChange}
                                        hasError={!!errors.region}
                                    >
                                        <option value="">지역 선택</option>
                                        {regionsArr.map((region) => (
                                            <option key={region} value={region}>
                                                {region}
                                            </option>
                                        ))}
                                    </StyledSelect>
                                </SelectWrapper>
                                {errors.region && <ErrorMessage>{errors.region}</ErrorMessage>}
                            </InputGroup>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <CheckboxContainer>
                                <StyledCheckbox
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                />
                                <CheckboxLabel htmlFor="agreeTerms">
                  <span className={formData.agreeTerms ? "checked" : ""}>
                    {formData.agreeTerms && <Check size={12}/>}
                  </span>
                                    <div>
                                        <strong>이용약관 동의 (필수)</strong>
                                        <TermsLink href="#" target="_blank">
                                            약관 보기
                                        </TermsLink>
                                    </div>
                                </CheckboxLabel>
                            </CheckboxContainer>
                            {errors.agreeTerms && <ErrorMessage>{errors.agreeTerms}</ErrorMessage>}

                            <CheckboxContainer>
                                <StyledCheckbox
                                    type="checkbox"
                                    id="agreePrivacy"
                                    name="agreePrivacy"
                                    checked={formData.agreePrivacy}
                                    onChange={handleChange}
                                />
                                <CheckboxLabel htmlFor="agreePrivacy">
                  <span className={formData.agreePrivacy ? "checked" : ""}>
                    {formData.agreePrivacy && <Check size={12}/>}
                  </span>
                                    <div>
                                        <strong>개인정보 처리방침 동의 (필수)</strong>
                                        <TermsLink href="#" target="_blank">
                                            약관 보기
                                        </TermsLink>
                                    </div>
                                </CheckboxLabel>
                            </CheckboxContainer>
                            {errors.agreePrivacy && <ErrorMessage>{errors.agreePrivacy}</ErrorMessage>}

                            <CheckboxContainer>
                                <StyledCheckbox
                                    type="checkbox"
                                    id="agreeMarketing"
                                    name="agreeMarketing"
                                    checked={formData.agreeMarketing}
                                    onChange={handleChange}
                                />
                                <CheckboxLabel htmlFor="agreeMarketing">
                  <span className={formData.agreeMarketing ? "checked" : ""}>
                    {formData.agreeMarketing && <Check size={12}/>}
                  </span>
                                    <div>
                                        <strong>마케팅 정보 수신 동의 (선택)</strong>
                                        <p>이벤트 및 혜택 정보를 받아보실 수 있습니다.</p>
                                    </div>
                                </CheckboxLabel>
                            </CheckboxContainer>
                        </>
                    )}

                    {step < 3 ? (
                        <StyledButton type="button" onClick={handleNext}>
                            다음 단계
                        </StyledButton>
                    ) : (
                        <StyledButton type="submit">회원가입 완료</StyledButton>
                    )}
                </SignInForm>
            </SignInCard>
        </SignInContainer>
    );
};

export default SignIn;