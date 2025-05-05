import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux";
import { theme } from "./styles/theme";
import store from "./store/store";
import { SnackbarProvider } from "notistack";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <SnackbarProvider maxSnack={2} className="snack-bar-provider" autoHideDuration={3000}
                              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}>
            <App />
            </SnackbarProvider>
        </Provider>
    </ThemeProvider>
);

