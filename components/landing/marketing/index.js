import React from "react";
import styled from "styled-components";
import { respond, SectionNarrow, Grid2 } from "../../../styles";
import Info from "./info";
import Poster from "./poster";

export default function Marketing() {
    return (
        <SectionNarrow>
            <Grid>
                <Info />
                <Poster />
            </Grid>
        </SectionNarrow>
    );
}
const Grid = styled(Grid2)`
    margin: 2.7rem 0;

    ${() => respond("m", "margin: 6.7rem 0;")}
`;
