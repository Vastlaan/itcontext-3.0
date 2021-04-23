import styled from "styled-components";

export const Heading1 = styled.h1`
    font-size: 4.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.black)};
    max-width: 60rem;
    line-height: 0.8;
    text-align: ${(p) => (p.align ? p.align : "left")};

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
export const HeadingLine = styled.h1`
    font-size: 3.3rem;
    font-weight: 900;
    color: ${(p) => (p.color ? p.color : p.theme.black)};
    max-width: 60rem;
    line-height: 0.8;
    text-align: ${(p) => (p.align ? p.align : "left")};
    position: relative;
    padding-left: 1.9rem;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 5px;
        background-color: ${(p) => p.theme.primary};
    }

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
export const Heading2 = styled.h2`
    font-size: 3.3rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
    max-width: 60rem;
    line-height: 1;
    margin-bottom: 1.9rem;

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
export const Heading3 = styled.h3`
    font-size: 2.2rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
    max-width: ${(p) => (p.wide ? p.wide : "60rem")}
    line-height: 0.8;
    font-weight: 800;

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
