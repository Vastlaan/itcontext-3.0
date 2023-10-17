import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./buttons";
import MenuButton from "./menuButton";
import Logo from "./logo";
import { respond } from "../../styles";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Container>
      <Logo />

      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <Buttons isOpen={isOpen} isSearch={isSearch} setIsSearch={setIsSearch} />
    </Container>
  );
}

const Container = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0rem 0.9rem;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(9, 10, 12, 0.9);

  ${() => respond("m", "padding: 0 2.7rem;")}
`;
