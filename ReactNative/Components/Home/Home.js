import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import createReactClass from 'create-react-class';

var Home = createReactClass({
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.content}>
        Home
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:20,
    color:'blue'
  }
})


module.export = Home
