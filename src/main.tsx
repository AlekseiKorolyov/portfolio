import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from "./layout/styles/Global.styled.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>,
)
