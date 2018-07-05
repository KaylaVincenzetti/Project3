import React, { Component } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Flexbox from 'flexbox-react';

class alternative extends Component {
  render() {
    return (
      <div className="App">
      <Flexbox flexDirection="column" minHeight="100vh">
       <Header />
       <Content />
        <Footer />
        </Flexbox>
      </div>
    );
  }
}

export default alternative;