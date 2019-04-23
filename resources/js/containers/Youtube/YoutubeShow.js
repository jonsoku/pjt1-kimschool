import React, { Component } from 'react';
import { RenderYoutube } from '../../components/Youtube';
import Container from '../../components/Style/Container';
import Axios from 'axios';

export default class YoutubeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: [],
    };
  }

  handleLinkEdit = id => {
    this.props.history.push(`/youtubes/${id}/edit`);
  };

  _getYoutube = async () => {
    await Axios.get(`/youtubes/${this.props.match.params.id}`)
      .then(response =>
        this.setState({
          youtube: response.data.youtube,
        }),
      )
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this._getYoutube();
  }

  render() {
    const { youtube } = this.state;
    const { handleLinkEdit } = this;
    return (
      <Container className="top">
        <RenderYoutube youtube={youtube} handleLinkEdit={handleLinkEdit} />
      </Container>
    );
  }
}
