import {
    Button,
    ButtonGroup,
    ContentBody,
    ContentHeader,
    FormGroup,
    FormInput,
    FormLabel,
    FormSelect
} from "../MyPage.styled";
import { Eye, EyeOff, Save } from "lucide-react";
import type React from "react";
import { iDefaultInterface } from "../../../types/types";
import { birthYears, regions } from "../../../dummy/data";

interface iProfile extends iDefaultInterface{
    userData: any;
    setUserData: (params: any) => void;
}


const Profile = (props: iProfile) => {
    return (
        <>
            <ContentHeader>
                <h2>프로필 정보</h2>
                <p>회원 정보를 확인하고 수정할 수 있습니다.</p>
            </ContentHeader>
            <ContentBody>
                <form onSubmit={props.onSubmit}>
                    <FormGroup>
                        <FormLabel htmlFor="name">이름</FormLabel>
                        <FormInput
                            id="name"
                            type="text"
                            value={props.userData.name}
                            onChange={(e: any) => props.setUserData({ ...props.userData, name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="nickname">닉네임</FormLabel>
                        <FormInput
                            id="nickname"
                            type="text"
                            value={props.userData.nickname}
                            onChange={(e: any) => props.setUserData({ ...props.userData, nickname: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email">이메일</FormLabel>
                        <FormInput
                            id="email"
                            type="email"
                            value={props.userData.email}
                            onChange={(e: any) => props.setUserData({ ...props.userData, email: e.target.value })}
                            disabled
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="phone">전화번호</FormLabel>
                        <FormInput
                            id="phone"
                            type="tel"
                            value={props.userData.phone}
                            onChange={(e: any) => props.setUserData({ ...props.userData, phone: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="birthYear">출생년도</FormLabel>
                        <FormSelect
                            id="birthYear"
                            value={props.userData.birthYear}
                            onChange={(e: any) => props.setUserData({ ...props.userData, birthYear: e.target.value })}
                        >
                            <option value="">출생년도 선택</option>
                            {birthYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}년
                                </option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="region">지역</FormLabel>
                        <FormSelect
                            id="region"
                            value={props.userData.region}
                            onChange={(e: any) => props.setUserData({ ...props.userData, region: e.target.value })}
                        >
                            <option value="">지역 선택</option>
                            {regions.map((region) => (
                                <option key={region} value={region}>
                                    {region}
                                </option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <ButtonGroup>
                        <Button type="submit">
                            <Save size={16} />
                            저장
                        </Button>
                    </ButtonGroup>
                </form>

                {/*DESC: 비밀번호 변경*/}

                {/*<form onSubmit={props.handlePasswordChange} style={{ marginTop: "2rem" }}>*/}
                {/*    <ContentHeader>*/}
                {/*        <h2>비밀번호 변경</h2>*/}
                {/*        <p>새로운 비밀번호를 설정할 수 있습니다.</p>*/}
                {/*    </ContentHeader>*/}
                {/*    <FormGroup>*/}
                {/*        <FormLabel htmlFor="password">새 비밀번호</FormLabel>*/}
                {/*        <div style={{ position: "relative" }}>*/}
                {/*            <FormInput*/}
                {/*                id="password"*/}
                {/*                type={showPassword ? "text" : "password"}*/}
                {/*                value={password}*/}
                {/*                onChange={(e: any) => setPassword(e.target.value)}*/}
                {/*            />*/}
                {/*            <button*/}
                {/*                type="button"*/}
                {/*                style={{*/}
                {/*                    position: "absolute",*/}
                {/*                    right: "12px",*/}
                {/*                    top: "50%",*/}
                {/*                    transform: "translateY(-50%)",*/}
                {/*                    background: "none",*/}
                {/*                    border: "none",*/}
                {/*                    cursor: "pointer",*/}
                {/*                }}*/}
                {/*                onClick={() => setShowPassword(!showPassword)}*/}
                {/*            >*/}
                {/*                {showPassword ? <EyeOff size={18} color="#aaa" /> : <Eye size={18} color="#aaa" />}*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup>*/}
                {/*        <FormLabel htmlFor="confirmPassword">비밀번호 확인</FormLabel>*/}
                {/*        <FormInput*/}
                {/*            id="confirmPassword"*/}
                {/*            type="password"*/}
                {/*            value={confirmPassword}*/}
                {/*            onChange={(e: any) => setConfirmPassword(e.target.value)}*/}
                {/*        />*/}
                {/*    </FormGroup>*/}
                {/*    <ButtonGroup>*/}
                {/*        <Button type="submit" disabled={!password || !confirmPassword}>*/}
                {/*            변경*/}
                {/*        </Button>*/}
                {/*    </ButtonGroup>*/}
                {/*</form>*/}
            </ContentBody>
        </>
    )
};

export default Profile;