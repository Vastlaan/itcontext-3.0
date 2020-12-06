import React from "react";
import styled from "styled-components";

import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Layout({ children }) {
    return (
        <Container>
            <Navigation />
            {children}
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;
