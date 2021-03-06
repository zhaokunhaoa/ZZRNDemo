import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class MyImage extends Component {
  render() {
    let pic = {
      uri: this.props.url
    };
    return (
      <View style={{margin:20,alignItems:'center'}}>
        <Image source={pic} style={{width:100,height:100}} />
        <Text>Hello!</Text>
      </View>
    );
  }
}

export default class Main extends Component {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>
            Welcome to React Native!
        </Text>
        <Text>
            哈哈aa哈哈!
        </Text>
        <Image source={pic} style={styles.banners} />
        <Greeting name='Rexxar' />
        <MyImage url='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  banners: {
    width: 193, 
    height: 110,
    margin: 20
  }
});

AppRegistry.registerComponent('ZZRNDemo', () => Main);
