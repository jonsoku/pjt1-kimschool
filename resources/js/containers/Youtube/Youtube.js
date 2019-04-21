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

  handleCreateLink = () => {
    const { push } = this.props.history;
    if (confirm('글 작성페이지로 이동합니다.')) {
      push('/youtubes/create');
    }
  };

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
    const { handleCreateLink } = this;
    return (
      <Container className="top">
        <RenderYoutubes
          youtubes={youtubes}
          handleCreateLink={handleCreateLink}
        />
      </Container>
    );
  }
}
