import React, { Component } from 'react';

import Navbar from './container/navbar';
import Main from './router';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC2HB6SNe3Gj9MN3lGpDYbCrslL8unJzGw",
    authDomain: "pollingapp-9f09e.firebaseapp.com",
    databaseURL: "https://pollingapp-9f09e.firebaseio.com",
    projectId: "pollingapp-9f09e",
    storageBucket: "",
    messagingSenderId: "427175708378"
  };
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Main/>
      </div>
    );
  }
}

export default App;
