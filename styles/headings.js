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
export const Heading2 = styled.h1`
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
export const Heading3 = styled.h1`
    font-size: 1.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.primary)};
    max-width: 60rem;
    line-height: 0.8;
    text-transform: uppercase;

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
