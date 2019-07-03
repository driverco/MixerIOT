import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Content';
/*import Header from './Header';
import Footer from './Footer';*/

/*import items from '../Menu';*/
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
        <Content body={children} />
      </div>
    );
  }
}

export default App;