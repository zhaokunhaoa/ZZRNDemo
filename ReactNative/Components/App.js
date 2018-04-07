import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

var Tab = require('./Root/Tab');


export default class App extends Component {
  render() {
    return (
        <Tab />
    );
  }
}

AppRegistry.registerComponent('ZZRNDemo', () => App);
