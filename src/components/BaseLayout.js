import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class BaseLayout extends Component {
  render() {
    return (
      <div id="layout">
        <header>
          BankShot ATM
        </header>
          {this.props.children}
        <footer>
        </footer>
      </div>
    )
  }
}
