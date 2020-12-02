import React from "react";
import { SectionNarrow, Grid2 } from "../../../styles";
import Info from "./info";
import Poster from "./poster";

export default function Marketing() {
    return (
        <SectionNarrow>
            <Grid2 style={{ margin: "6.7rem 0" }}>
                <Info />
                <Poster />
            </Grid2>
        </SectionNarrow>
    );
}
