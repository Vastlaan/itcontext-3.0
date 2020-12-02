import React from 'react'
import Image from "next/image";
import styled from "styled-components";

export default function PicturesComponent() {
  return (
      <Pictures>
          <Img1>
              <Image
                  src="/static/img/homepage-header-1.jpg"
                  alt="website design"
                  width="1393"
                  height="2749"
              />
          </Img1>
          <Img2>
              <Image
                  src="/static/img/homepage-header-2.jpg"
                  alt="website design"
                  width="1393"
                  height="2749"
              />
          </Img2>
      </Pictures>
  );
}
const Pictures = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 1.9rem;
`;

const Img1 = styled.div`
    grid-column: 1/2;
    grid-row: 2/-1;
    max-width: 27rem;
    margin: 0 auto;
`;
const Img2 = styled.div`
    grid-column: 2/3;
    grid-row: 1/-2;
    max-width: 27rem;
    margin: 0 auto;
`;