import React from "react";
import styled from "styled-components";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import WhatsApp from "../components/utils/whatsapp";

export default function Layout({ children }) {
    return (
        <Container>
            <Navigation />
            {children}
            <Footer />
            <WhatsApp />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;
