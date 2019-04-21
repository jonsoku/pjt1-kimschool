import React, { Component } from 'react';
import { RenderYoutubes } from '../../components/Youtube';
import Container from '../../components/Style/Container';
import Axios from 'axios';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubes: [],
      loading: false,
    };
  }

  _getYoutubes = async () => {
    await Axios.get('/youtubes').then(response =>
      this.setState({
        youtubes: [...response.data.youtubes],
      }),
    );
  };

  componentDidMount() {
    this._getYoutubes();
  }

  render() {
    const { youtubes } = this.state;
    return (
      <Container className="top">
        <RenderYoutubes youtubes={youtubes} />
      </Container>
    );
  }
}
