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
      keyword: {
        JavaKeyword: '',
        WebKeyword: '',
        AndroidKeyword: '',
        test: '',
      },
    };
  }

  handleChange = e => {
    this.setState({
      keyword: {
        ...this.state.keyword,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleChange2 = e => {
    this.setState({
      keyword: {
        ...this.state.keyword,
        test: e.target.value,
      },
    });
  };

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
    const { youtubes, keyword } = this.state;
    const { handleCreateLink, handleChange, handleChange2 } = this;
    let JavaAll = youtubes.filter(youtube => youtube.category <= 3);
    const Javas = JavaAll.filter(
      java => java.title.indexOf(keyword.JavaKeyword) !== -1,
    );
    const WebAll = youtubes.filter(
      youtube => youtube.category === 4 || youtube.category === 5,
    );
    const Webs = WebAll.filter(
      java => java.title.indexOf(keyword.WebKeyword) !== -1,
    );
    const AndroidAll = youtubes.filter(youtube => youtube.category === 6 || '');
    const Androids = AndroidAll.filter(
      java => java.title.indexOf(keyword.AndroidKeyword) !== -1,
    );
    console.log(this.state.keyword.test);

    return (
      <Container className="top">
        <RenderYoutubes
          handleCreateLink={handleCreateLink}
          Javas={Javas}
          Webs={Webs}
          Androids={Androids}
          handleChange={handleChange}
          handleChange2={handleChange2}
          keyword={keyword}
        />
      </Container>
    );
  }
}
