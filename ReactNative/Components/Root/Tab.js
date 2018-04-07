import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import createReactClass from 'create-react-class';
// var createReactClass = require('create-react-class');



var HomeVC = require('../Home/Home');
var MessageVC = require('../Message/Message');
var MeVC = require('../Me/Me');

var Tab = createReactClass({
    getInitialState(){
      return{
          selectedTab:'首页'
      }
    },

    
    
    render() {
      return (
          <TabNavigator>
              <TabNavigator.Item
                selected={this.state.selectedTab === '首页'}
                title = '首页'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText} 
                renderIcon={() => <Image style={styles.iconStyle}/>}
                renderSelectedIcon={() =><Image source={require("../img/favicon.png")} style={styles.iconStyle}/>}
                onPress={() => this.setState({ selectedTab: '首页' })}
                >
                <View style={styles.page0}>
                    <Text style={{fontSize:18,padding:15,color: 'blue'}}>首页</Text>
                </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === '消息'}
                title = '消息'
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText} 
                renderIcon={() => <Image style={styles.iconStyle}/>}
                renderSelectedIcon={() =><Image source={require("../img/favicon.png")} style={styles.iconStyle}/>}
                onPress={() => this.setState({ selectedTab: '消息' })}
                >
                <View style={styles.page0}>
                    <Text style={{fontSize:18,padding:15,color: 'blue'}}>消息</Text>
                </View>
              </TabNavigator.Item>
          </TabNavigator>
      );
    },
});

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
  },
  iconStyle:{
    width: Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25
  },
})


module.exports = Tab;