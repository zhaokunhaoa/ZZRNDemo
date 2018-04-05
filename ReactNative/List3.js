import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class List extends Component {
  
  render() {
    img = require('./img/favicon.png')
      return(
        <ScrollView>
          <Text style={{fontSize:20}}>Scroll me plz</Text>
          <Image source={img} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:20}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:20}}>What's the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:20}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:20, color:'red'}}>
          哈哈哈艾尚算法啊是否挨罚啊是否AK交罚款发卡机啊放假唉孔结案反馈挨罚啊尽快发挨罚挨罚挨罚挨罚挨罚啊艾弗森啊螺蛳粉拉风拉浪费拉风奥利弗
          挨罚挨罚挨罚挨罚挨罚艾弗森挨罚挨罚挨罚挨罚
          </Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:20}}>React Native</Text>
        </ScrollView>
    );
  }
}

AppRegistry.registerComponent('ZZRNDemo', () => List);
