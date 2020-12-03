import styled from "styled-components";

export const ParaLine = styled.p`
    font-size: 1.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.white)};
    max-width: 49rem;
    position: relative;
    padding-left: 1.9rem;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: ${(p) => p.theme.primary};
    }
`;

export const Para1 = styled.p`
    font-size: 1.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.white)};
    max-width: 49rem;
    position: relative;
    text-align: ${(p) => (p.align ? p.align : "left")};
    line-height: 1.4;
`;
export const Para2 = styled.p`
    font-size: 1.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.white)};
    max-width: 60rem;
    position: relative;
    text-align: ${(p) => (p.align ? p.align : "left")};
    line-height: 1.4;
`;
