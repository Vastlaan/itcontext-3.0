import React from "react";
import Layout from "../globals/layout";
import Header from "../components/projekten/header";
import Display from "../components/projekten/display";

export default function Gallery() {
    return (
        <Layout>
            <Header />
            <Display
                headline="websites galerij"
                p1="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p2="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p3="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p4="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                imgl1="/static/img/gallery-5.jpg"
                imgl2="/static/img/gallery-1.jpg"
                imgl3="/static/img/gallery-4.jpg"
                imgl4="/static/img/gallery-3.jpg"
                imgl5="/static/img/gallery-1.jpg"
                imgsm1="/static/img/gallery-7.jpg"
                imgsm2="/static/img/gallery-2.jpg"
                imgsm3="/static/img/gallery-6.jpg"
            />
            <Display
                headline="andere ontwerpen"
                p1="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p2="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p3="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                p4="Een klein ongelukje kan de laklaag van je auto beschadigen. Deze krassen en deuken tasten de beschermlaag aan. "
                imgl1="/static/img/gallery-1.jpg"
                imgl2="/static/img/gallery-3.jpg"
                imgl3="/static/img/gallery-4.jpg"
                imgl4="/static/img/gallery-3.jpg"
                imgl5="/static/img/gallery-1.jpg"
                imgsm1="/static/img/gallery-7.jpg"
                imgsm2="/static/img/gallery-6.jpg"
                imgsm3="/static/img/gallery-2.jpg"
            />
        </Layout>
    );
}
