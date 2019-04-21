import React, { Component } from 'react';
import { Aside, Header } from '.';
import {
  RenderHambuger,
  RenderAside,
  RenderHeader,
} from '../../components/Sementic';

export default class SementicAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      scrollHeader: false,
    };
  }

  handleToggle = () => {
    const { toggle } = this.state;
    {
      toggle
        ? this.setState({
            toggle: false,
          })
        : this.setState({
            toggle: true,
          });
    }
  };

  handlePaging = () => {
    console.log('hey');
  };

  handleScrolling = () => {
    // scrollTop + clientHeight = scrollHeight
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    {
      scrollTop > 79
        ? this.setState({
            scrollHeader: true,
          })
        : this.setState({
            scrollHeader: false,
          });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling, false);
  }

  render() {
    console.log(this.state.scrollHeader);
    const { handleToggle } = this;
    const { toggle, scrollHeader } = this.state;
    return (
      <div>
        <RenderHeader scrollHeader={scrollHeader} />
        <RenderHambuger handleToggle={handleToggle} toggle={toggle} />
        <RenderAside toggle={toggle} />
      </div>
    );
  }
}
