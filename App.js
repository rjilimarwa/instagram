import React from 'react';
import { StyleSheet, Text, View ,Block } from 'react-native';
import  InstaClone  from './src/InstaClone.js';

 import {Apploading,Asset} from 'expo';




export default class App extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <InstaClone />
        </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
