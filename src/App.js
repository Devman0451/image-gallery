import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';
import ImageGallery from './containers/ImageGallery/ImageGallery';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <Layout>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={ImageGallery} />
        </Switch>
        <News />
        <Footer />
      </Layout>
    );
  }
}

export default App;
