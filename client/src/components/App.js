import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Content';
import Header from './Header';
import items from '../Menu';
/*import Footer from './Footer';*/


/*
<Header items={items} />
<Content body={children} />
<Footer />
*/

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header items={items} />
        <Content body={children} />
      </div>
    );
  }
}

export default App;