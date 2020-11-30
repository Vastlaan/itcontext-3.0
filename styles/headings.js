import styled from "styled-components";

export const Heading1 = styled.h1`
    font-size: 4.9rem;
    color: ${(p) => (p.color ? p.color : p.theme.black)};

    span {
        color: ${(p) => p.theme.primary};
    }
    sub {
        font-size: 2.7rem;
    }
`;
