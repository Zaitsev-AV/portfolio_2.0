import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "@/App.tsx";
import {GlobalStyles} from "@/styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles/Theme.styled.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App/>
    <GlobalStyles/>
  </ThemeProvider>,
)
