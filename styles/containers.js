import styled from "styled-components";

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
