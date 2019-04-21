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
      },
    };
  }

  handleSubmit = async e => {
    const { form } = this.state;
    e.preventDefault();
    {
      await Axios.post('/youtubes', {
        category: form.category,
        title: form.title,
        description: form.description,
        url: form.url,
      })
        .catch(error => console.log(error))
        .then(
          this.setState({
            form: {
              ...this.state.form,
              category: '',
              title: '',
              description: '',
              url: '',
            },
          }),
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

  render() {
    console.log(this.state.form);
    const { handleChange, handleSubmit } = this;
    const { form } = this.state;
    return (
      <Container className="top">
        <RenderYoutubeForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          form={form}
        />
      </Container>
    );
  }
}
