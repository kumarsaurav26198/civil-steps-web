// // index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { ChakraProvider } from "@chakra-ui/react";
// import AuthContextProvider from "./Components/Context/AuthContextProvider";
// import { BrowserRouter } from "react-router-dom";
// import { DataProvider } from "./Components/Context/DataContext";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <DataProvider>
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <AuthContextProvider>
//             <ChakraProvider>
//               <CssBaseline />
//               <App />
//             </ChakraProvider>
//           </AuthContextProvider>
//         </BrowserRouter>
//       </ThemeProvider>
//     </DataProvider>
//   </Provider>
// );

// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Components/Context/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/Context/DataContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// console.log('store:', store.getState())
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme({
  palette: {
    mode: "light", // You can change to 'dark' for dark mode
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DataProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthContextProvider>
            <ChakraProvider>
              <CssBaseline />
              <App />
            </ChakraProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
