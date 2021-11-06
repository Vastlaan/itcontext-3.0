import React from 'react'
import styled from 'styled-components'
import {Heading1, Para1, respond} from '../../styles'

export default function ModalClosedComponent() {
  return (
    <Modal>
      <Heading1 color='white'>Het bedrijf is gesloten</Heading1>
      <Para1 margin='2.7rem 0'>Wij delen u mede dat ons bedrijf met ingang van 31.10.2021 zijn dienstverlening heeft gestaakt en definitief is gesloten.</Para1>
      <Para1 margin='2.7rem 0'>Hopende u hiermee voldoende te hebben geïnformeerd.</Para1>
      <Para1 >Met vriendelijke groet,</Para1>
      <Para1 >Team IT Context</Para1>
    </Modal>
  )
}


const Modal = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  min-width: 24rem;
  background-color: ${p=>p.theme.primary};
  padding: 2.7rem;
  z-index: 199;
  box-shadow: 0 0 1rem rgba(0,0,0,.6);

  ${()=>respond('m','padding: 4.7rem;')}
`