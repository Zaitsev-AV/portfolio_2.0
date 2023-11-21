import { App } from "@/App";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { theme } from "@/styles/Theme.styled";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);
