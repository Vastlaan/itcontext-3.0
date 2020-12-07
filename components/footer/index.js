import React from "react";
import styled from "styled-components";
import Info from "./info";
import Offer from "./offer";
import Links from "./links";
import Copyright from "./copyright";
import { respond, Content } from "../../styles";

import { data } from "../../lib/footer";

export default function Footer2() {
    return (
        <Footer>
            <Content>
                <Bulk>
                    <Info
                        name={data.name}
                        header={data.header}
                        address={data.address}
                        phone={data.phone}
                        phoneNL={data.phoneNL}
                        email={data.email}
                    />

                    <Links sections={data.sections} />

                    <Offer offerHeader={data.offerHeader} />
                </Bulk>

                <Copyright copyright={data.copyright} />
            </Content>
        </Footer>
    );
}

const Footer = styled.footer`
    padding: 2.7rem 0.9rem;

    background-color: ${(p) => p.theme.black};

    ${() => respond("l", "padding: 4.7rem; padding-bottom: 0;")}
`;
const Bulk = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${() => respond("m", "grid-template-columns: repeat(2, 1fr);")}
    ${() => respond("l", "grid-template-columns: repeat(2, 1fr);")}
`;
