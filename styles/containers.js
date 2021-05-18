import styled from "styled-components";
import { respond } from "./respond";

export const Header = styled.header`
    position: relative;
    padding: 1.9rem;
    padding-top: 10rem;
    background-color: ${(p) => (p.color ? p.color : p.theme.black)};
    ${() => respond("s", "padding-top: 6.7rem;")}
    ${() => respond("xxl", "padding-top: 10rem;")}
`;
export const SectionWide = styled.section`
    position: relative;
`;
export const SectionNarrow = styled.section`
    position: relative;
    max-width: 1255px;
    margin: 0 auto;
`;
export const Content = styled.div`
    max-width: 1255px;
    margin: 0 auto;
`;
export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(p) => (p.align ? p.align : "center")};
    justify-content: ${(p) => (p.justify ? p.justify : "center")};
    margin: ${(p) => (p.margin ? p.margin : "0")};
    height: ${(p) => (p.fixedHeight ? p.fixedHeight : "auto")};
`;
export const FlexRow = styled.div`
    display: flex;
    align-items: ${(p) => (p.align ? p.align : "center")};
    justify-content: ${(p) => (p.justify ? p.justify : "center")};
    margin: ${(p) => (p.margin ? p.margin : "0")};
    width: ${(p) => (p.fixedWidth ? p.fixedWidth : "auto")};
`;

export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.9rem 1.4rem;
    grid-gap: 1.9rem;
    overflow: hidden;

    ${() => respond("m", "grid-template-columns: 1fr 1fr;")}
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2.7rem 0;

    ${() => respond("xxl", "margin: 6.8rem 0;")}

    h1 {
        margin-bottom: 4.7rem;
    }
    p {
        margin-bottom: 6.7rem;
    }
`;
export const Grid2XL = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.9rem;
    grid-gap: 2.7rem;

    ${() => respond("xl", "grid-template-columns: 1fr 1fr;")}
`;
export const PageNav = styled.div`
    padding: 1.9rem;
    p,
    a {
        text-decoration: none;
        font-weight: 400;
        color: ${(props) => (props.color ? props.color : props.theme.white)};
        font-size: 1.3rem;
        letter-spacing: 0.3rem;
        transition: all 0.3s;

        &:hover {
            color: ${(props) => props.theme.silver};
        }
    }
`;
export const List = styled.ul`
    padding: 2.7rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    ${() => respond("m", "padding: 0 2.7rem;")}

    li {
        font-size: 1.9rem;
        color: ${(p) => p.theme.white};
        display: flex;
        align-items: center;
        margin: 1.9rem 0;

        ${() => respond("m", "margin: .9rem 0;")}

        svg {
            margin-right: 1.9rem;
            font-size: 2.2rem;
            color: ${(p) => p.theme.primary};
        }

        span {
            color: ${(p) => p.theme.primary};
            font-style: italic;
            font-size: 1.3rem;
            letter-spacing: 0.3rem;
        }
    }
`;
