import React from "react";
import Head from "next/Head";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import ThemeProvider from "./themeProvider";
import StateProvider from "./stateProvider";

import Navigation from "../components/navigation";

export default function Layout({ children }) {
    return (
        <Container>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Navigation />
                    {children}
                </ThemeProvider>
            </StateProvider>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;
