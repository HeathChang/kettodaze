import { MyPageContainer } from "./MyPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { isEmpty } from "../../common/util";
import Login from "../../components/Login/Login";

const MyPage = () => {
    const {userData} = useSelector((state: RootState) => state.auth);



    if(isEmpty(userData)){
        return <Login/>
    }



    return (
        <MyPageContainer>
            Hello
        </MyPageContainer>
    )
};


export default MyPage;