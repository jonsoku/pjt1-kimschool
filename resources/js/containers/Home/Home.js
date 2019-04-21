import React, { Component } from 'react';
import { Container } from '../../components/Style';
import { RenderSlide, RenderBlock } from '../../components/Home';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: '1',
          src:
            'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '2',
          src:
            'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '3',
          src:
            'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '4',
          src:
            'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '5',
          src:
            'https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5NTd9&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '6',
          src:
            'https://images.unsplash.com/photo-1472157592780-9e5265f17f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: '7',
          src:
            'https://images.unsplash.com/photo-1536500152107-01ab1422f932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
      ],
      page: 0,
    };
  }

  handleMoveTo = id => {
    const { page } = this.state;
    this.setState({
      page: id - 1,
    });
  };

  handleNext = () => {
    const { page, images } = this.state;
    this.setState({
      page: page + 1,
    });
    if (page === images.length - 1) {
      this.setState({
        page: 0,
      });
    }
  };

  handlePrev = () => {
    const { page, images } = this.state;
    this.setState({
      page: page - 1,
    });
    if (page === 0) {
      this.setState({
        page: images.length - 1,
      });
    }
  };

  render() {
    const { page, images } = this.state;
    const { handleNext, handlePrev, handleMoveTo } = this;
    console.log(this.state.page);
    return (
      <>
        <RenderSlide
          page={page}
          images={images}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleMoveTo={handleMoveTo}
        />
        <Container>
          <RenderBlock />
        </Container>
      </>
    );
  }
}
