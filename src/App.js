import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import SingleImage from './containers/ImageGallery/SingleImage/SingleImage';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <Layout>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/images/:image_id" component={SingleImage} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </Layout>
    );
  }
}


export default App;
