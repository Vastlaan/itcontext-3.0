import styled from "styled-components";
import { FlexCol } from "../../../styles";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function SocialMediaComponent() {
    return (
        <Container>
            <FlexCol>
                <Button href="https://www.facebook.com/webdesignstudiopurmerend/">
                    <FaFacebookSquare />
                </Button>
                <Button href="https://www.linkedin.com/company/it-context/">
                    <FaLinkedin />
                </Button>
            </FlexCol>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(3.4rem, -50%);
    background-color: ${(p) => p.theme.primary};
    padding: 1.4rem 0.6rem 1.4rem 1.4rem;
    transition: all 0.3s;
    border-radius: 5px 0 0 5px;

    svg {
        color: ${(p) => p.theme.white};
        font-size: 2.7rem;
        transition: all 0.3s;

        &:hover {
            color: skyblue;
        }
    }

    &:hover {
        transform: translate(0, -50%);

        svg {
            // transform: scale(1.5);
        }
    }
`;

const Button = styled.a`
    background-color: transparent;
    border: none;
    margin: 0.9rem auto;
    cursor: pointer;
    color: "skyblue";
`;
