import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div``;
const Grid = styled.div`
  position: fixed;
  width: 100%;
  transition: all 0.3s ease;
  background: ${props => props.scrollHeader && 'black'};
  padding-top: ${props => (props.scrollHeader ? '0' : '30px')};
  padding-bottom: ${props => (props.scrollHeader ? '0' : '30px')};
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 79px;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
  }
`;
const Logo = styled.div`
  grid-area: 1 / span 4;
  text-align: left;
`;
const RenderHeader = ({ scrollHeader }) => {
  return (
    <Header>
      <Grid scrollHeader={scrollHeader}>
        <Logo>
          <Link to="/">
            <h1>JONSOKU</h1>
          </Link>
        </Logo>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
      </Grid>
    </Header>
  );
};

export default RenderHeader;
