import React, { Component } from 'react';
import { Container } from '../../components/Style';
import { RenderSlide, RenderBlock } from '../../components/Home';

export default class Home extends Component {
  render() {
    return (
      <>
        <RenderSlide />
        <Container>
          <RenderBlock />
        </Container>
      </>
    );
  }
}
