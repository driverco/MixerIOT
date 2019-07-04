
// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar} from 'reactstrap';
import store from '../store';
/*import UserBox from './UserBox';*/
import { Widgets, Dns, VolumeUp, Archive, SettingsApplications, MusicNote} from '@material-ui/icons';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      authMessage:"",
      user: {}
    }
  }
/*  componentDidMount() {

    this.setState({
      authMessage: store.getState().User.authMessage,
      user: store.getState().User.user
    });
    store.subscribe( () => {
      this.setState({
        authMessage: store.getState().User.authMessage,
        user: store.getState().User.user
      })
    });
    this.unsubscribe = store.subscribe(() => { });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  */

  render() {

    return (
      <div className="m-0 p-0">
        <Navbar className="NavigationBar">
          <div className="menuItem" key="menuHomeFull"><Link to="/Home"><Dns />Mixer Full</Link></div>
          <div className="menuItem" key="menuHomeButtons"><Link to="/Home"><Widgets />Mixer Buttons</Link></div>
          <div className="menuItem" key="menuVolumes"><Link to="/MainVolume"><VolumeUp />Volumes</Link></div>
          <div className="menuItem" key="menuprofiles"><Link to="/Home"><Archive />Profiles</Link></div>
          <div className="menuItem" key="menuSettings"><Link to="/Home"><SettingsApplications />Settings</Link></div>
          <div className="menuItem" key="menuAboutUs"><Link to="/About"><MusicNote />About Us</Link></div>
        </Navbar> 
      </div>
    );
  }
}

export default Header;

/*          <div className="Menu">
            <nav className ="navbar navbar-dark bg-dark"> */
            
