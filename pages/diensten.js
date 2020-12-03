import React from "react";
import Layout from "../globals/layout";
import Header from "../components/diensten/header";
import Services from "../components/diensten/services";
import Info from "../components/diensten/info";

export default function Diensten() {
    return (
        <Layout>
            <Header />
            <Services />
            <Info />
        </Layout>
    );
}
