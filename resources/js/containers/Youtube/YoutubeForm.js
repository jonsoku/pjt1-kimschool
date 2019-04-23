import React, { Component } from 'react';
import { Container } from '../../components/Style';
import { RenderYoutubeForm } from '../../components/Youtube';
import Axios from 'axios';

export default class YoutubeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        category: '',
        title: '',
        description: '',
        url: '',
        subject: '',
      },
      editMode: false,
    };
  }

  _getYoutube = () => {
    Axios.get(`/youtubes/${this.props.match.params.id}`).then(response =>
      this.setState({
        form: {
          ...this.state.form,
          category: response.data.youtube.category,
          title: response.data.youtube.title,
          description: response.data.youtube.description,
          url: response.data.youtube.url,
          subject: response.data.youtube.subject,
        },
        editMode: true,
      }),
    );
  };

  handleEdit = async e => {
    e.preventDefault();
    console.log(e);
  };

  handleSubmit = async e => {
    const { form } = this.state;
    e.preventDefault();

    if (this.props.location.pathname === '/youtubes/create') {
      await Axios.post('/youtubes', {
        category: form.category,
        title: form.title,
        description: form.description,
        url: form.url,
        subject: form.subject,
      })
        .catch(error => console.log(error))
        .then(this.props.history.push('/youtubes'));
    } else {
      await Axios.put(`/youtubes/${this.props.match.params.id}`, {
        category: form.category,
        title: form.title,
        description: form.description,
        url: form.url,
        subject: form.subject,
      })
        .catch(error => console.log(error))
        .then(
          this.props.history.push(`/youtubes/${this.props.match.params.id}`),
        );
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  componentDidMount() {
    if (this.props.location.pathname !== '/youtubes/create') {
      this._getYoutube();
    }
  }
  render() {
    console.log(this.state.form);
    const { handleChange, handleSubmit } = this;
    const { form, editMode } = this.state;
    return (
      <Container className="top">
        <RenderYoutubeForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={form}
          editMode={editMode}
        />
      </Container>
    );
  }
}
