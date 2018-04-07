import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin', age:10},
            {key: 'Jackson', age:10},
            {key: 'James', age:10},
            {key: 'Joel', age:10},
            {key: 'John', age:10},
            {key: 'Jillian', age:10},
            {key: 'Jimmy', age:10},
            {key: 'Julie', age:10},
          ]}
          renderItem={ ({item}) => 
            <Text style={styles.item}> name = {item.key}, age = {item.age} </Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 64
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
AppRegistry.registerComponent('ZZRNDemo', () => FlatListBasics);
