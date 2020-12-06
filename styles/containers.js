import styled from "styled-components";
import { respond } from "./respond";

export const Header = styled.header`
    position: relative;
    padding-top: 10rem;
    background-color: ${(p) => (p.color ? p.color : p.theme.black)};
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

export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.9rem;
    grid-gap: 1.9rem;

    ${() => respond("m", "grid-template-columns: 1fr 1fr;")}
`;
export const Grid2XL = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.9rem;
    grid-gap: 2.7rem;

    ${() => respond("xl", "grid-template-columns: 1fr 1fr;")}
`;
export const PageNav = styled.div`
    padding: 0rem 1.9rem;
    p,
    a {
        text-decoration: none;
        font-weight: 400;
        color: ${(props) => props.theme.white};
        font-size: 1.3rem;
        letter-spacing: 0.3rem;
        transition: all 0.3s;

        &:hover {
            color: ${(props) => props.theme.silver};
        }
    }
`;
