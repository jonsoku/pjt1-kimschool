import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  img {
    width: 100%;
  }
`;

const RenderSlide = () => {
  return (
    <Box>
      <img
        src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </Box>
  );
};

export default RenderSlide;
