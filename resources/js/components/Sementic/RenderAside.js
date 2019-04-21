import React from 'react';
import styled from 'styled-components';

const Aside = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  background: pink;
  transition: all 0.3s ease;
  width: ${props => (props.toggle ? '20vw' : '0')};
`;

const RenderAside = ({ toggle }) => {
  return (
    <Aside toggle={toggle}>
      <p>RenderAside</p>
    </Aside>
  );
};

export default RenderAside;
