import { BiShieldQuarter, BiSliderAlt } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";

export default [
    {
        id: "pckg-01",
        icon: <BiShieldQuarter />,
        name: "Starter",
        price: "19,99",
        disclaimer: "prijs vanaf, per maand incl. btw, jaarlijks betalen",
        items: ["Custom website design", "Hosting", "Domeinnaam"],
        btn: "Bestelen",
        link: "/contact",
        color: "#006A93",
    },
    {
        id: "pckg-02",
        icon: <BiSliderAlt />,
        name: "Advanced",
        price: "39,99",
        disclaimer: "prijs vanaf, per maand incl. btw, jaarlijks betalen",
        items: [
            "Custom website design",
            "Hosting",
            "Domeinnaam",
            "E-mail",
            "Content Management Systeem",
        ],
        btn: "Bestelen",
        link: "/contact",
        color: "#284B63",
    },
    {
        id: "pckg-03",
        icon: <BsBuilding />,
        name: "Pro",
        price: "59,99",
        disclaimer: "prijs vanaf, per maand incl. btw, jaarlijks betalen",
        items: [
            "Custom website design",
            "Hosting",
            "Domeinnaam",
            "E-mail",
            "Content Management Systeem",
            "Een Ads Campagne oprichten",
        ],
        btn: "Bestelen",
        link: "/contact",
        color: "#C0392B",
    },
];
