import React, { Component } from 'react';
import Footer from '../componets/footer';
import Header from '../componets/header';
import Maincontact from '../componets/maincontact';

class Contact extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Maincontact/>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
