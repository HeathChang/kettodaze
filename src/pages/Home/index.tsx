import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "../../store/slices/uiSlice";
import { HomeBody, HomeContainer } from "./Home.styled";


const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, []);

    return (
        <HomeContainer>
            <HomeBody>
                HELLO
            </HomeBody>

            <HomeBody>
                HELLO
            </HomeBody>
        </HomeContainer>
    )
}

export default HomePage