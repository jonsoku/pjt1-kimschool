import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  top: 50%;
  right: 1rem;
  z-index: 999;
`;
const Hambuger = styled.div`
  position: relative;
  width: 1.8rem;
  height: 1rem;
  cursor: pointer;
  span {
    &:nth-of-type(1) {
      top: ${props => (props.toggle ? '0.5rem' : '0rem')};
      transform: ${props => props.toggle && 'rotate(45deg)'};
      background: ${props => props.toggle && 'red'};
    }
    &:nth-of-type(2) {
      top: 0.5rem;
      opacity: ${props => (props.toggle ? '0' : '1')};
    }
    &:nth-of-type(3) {
      top: ${props => (props.toggle ? '0.5rem' : '1rem')};
      transform: ${props => props.toggle && 'rotate(-45deg)'};
      background: ${props => props.toggle && 'red'};
    }
  }
`;
const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 5rem;
  background: black;
  position: absolute;
  transition: all 0.4s ease;
`;

const RenderHambuger = ({ handleToggle, toggle }) => {
  return (
    <Box>
      <Hambuger onClick={() => handleToggle()} toggle={toggle}>
        <Line />
        <Line />
        <Line />
      </Hambuger>
    </Box>
  );
};

export default RenderHambuger;
