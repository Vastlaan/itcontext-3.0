import React from "react";
import Layout from "../globals/layout";
import Header from "../components/prijzen/header";
import Packages from "../components/prijzen/packages";
import Intersection from "../components/utils/intersection";
import Prices from "../components/prijzen/prices";

export default function Prijzen() {
    return (
        <Layout>
            <Header />

            <Packages />

            <Intersection
                header="Laat de wereld zien, wie je bent"
                para="Een goede marketingstrategie vereist een solide plan, dat kan verschillen afhankelijk van: scope - het verkeer waarop je je concentreert; technologieën - tools die je gaat gebruiken; budget - de tijd en kosten die je bereid bent te besteden. IT Context helpt je bij het kiezen van de beste oplossingen die aan jouw wensen en eisen voldoen."
                btn1="Online Marketing"
                btn2="LinkedIn"
                link1="/diensten/online-marketing"
                link2="https://linkedin.com"
            />

            <Prices />
        </Layout>
    );
}
