import React from "react";
import styled from "styled-components";
import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/SideBar";


const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: #fafafa;
`

const PageWrapper = styled.main`
    height: 100vh;
    overflow: auto;
    
    width: 1200px;
    margin-left: auto;
    margin-right: calc((100vw - 80px - 1200px) / 2);

    @media (width < 1400px) {
        width: 900px;
        margin-right: calc((100vw - 80px - 900px) / 2);
    }
    @media (width < 960px) {
        width: 100%;
        margin-left: 0;
    }
`

function App() {
    // @ts-ignore
    const basename = import.meta.env.MODE == 'development' ? '' : 'DummyReact'
    return (
        <BrowserRouter basename={basename}>
            <AppWrapper>
                <SideBar/>
                <PageWrapper>
                    <AppRouter/>
                </PageWrapper>
            </AppWrapper>
        </BrowserRouter>
    );
}

export default App;
