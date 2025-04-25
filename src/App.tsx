import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles.styled";
import Layout from "./components/Layout";
import { RouterGroup } from "./routes/RouterGroup";
import { useDispatch } from "react-redux";
import { setMobile } from "./store/slices/uiSlice";
import { MOBILE_WIDTH } from "./common/constant";

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();

    const updateResponsiveState = (width: number) => {
        dispatch(setMobile(width <= MOBILE_WIDTH));
    };

    useEffect(() => {
        // Set initial state on mount
        updateResponsiveState(windowWidth);

        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            updateResponsiveState(width);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch, windowWidth]);

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Layout>
                <RouterGroup/>
            </Layout>
        </BrowserRouter>
    );
};

export default App;