import { Camera } from "lucide-react";
import React, { useState } from "react";
import { Avatar, UserEmail, UserName, UserProfileWrapper } from "./UserProfile.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { iDefaultInterface } from "../../../types/types";

interface UserProfileProps extends iDefaultInterface {
    userData: any;
    onClick?: () => void;
}

const UserProfile = ({ userData, onClick }: UserProfileProps) => {
    const { userData: userDataStore } = useSelector((state: RootState) => state.auth);
    const [file, setFile] = useState<any>(null);


    const handleProfileImage = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        document.getElementById("profile-image-input")?.click();
    };

    const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || undefined;
        if (!selectedFile) return;
        setFile(selectedFile);

        // TODO:: 변경 API
    };

    return (
        <UserProfileWrapper>
            <Avatar>
                <img src="" alt="프로필 이미지" width={100} height={100}/>
                <div className="edit-avatar" onClick={handleProfileImage}>
                    <Camera size={20}/> 변경
                </div>
                <input type="file" id={"profile-image-input"} style={{ display: "none" }} onChange={handleChangeFile}/>

            </Avatar>
            <UserName>{userDataStore?.nickname || userData.nickname}</UserName>
            <UserEmail>{userDataStore?.email || userData.email}</UserEmail>
        </UserProfileWrapper>
    );
};

export default UserProfile;