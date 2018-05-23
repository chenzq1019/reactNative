/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { map } from 'rsvp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    console.log('=========');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title={"Button"} onPress={()=>this.buttonClick()}></Button>
      </View>
    );
  }

  buttonClick(){
    console.log('click start');
    var array=[];
    for(let i=0;i<10;i++){
      array.push(i);
    }
    var mapobj={"name":"chenze","age":30};
    console.log(mapobj.age);
    console.log(mapobj["name"]);

    for(var key in mapobj){
      console.log(key);
      console.log(mapobj[key]);
    }
    console.log(mapobj.keys);

    var mp=new Map();
    mp[5]='chenzhuqing';
    mp['age']=30;
    console.log(mp);
    for(var key in mp){
      console.log(key);
      console.log(mp[key]);
    }
    mp.set(1,"a");
    mp.set(2,"b");
    mp.set(3,"c");
    var keys=[...mp.values()];
    console.log(keys[0]+keys[1]);

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
});
