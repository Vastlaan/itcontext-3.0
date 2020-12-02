import React from "react";
import styled from "styled-components";
import { respond, Header, Content, Grid2 } from "../../../styles";
import Info from "./info";
import Pictures from "./pictures";

export default function HeaderHomepage() {
    return (
        <Header>
            <Content>
                <Grid2>
                    <Info />
                    <Pictures />
                </Grid2>
            </Content>
        </Header>
    );
}
