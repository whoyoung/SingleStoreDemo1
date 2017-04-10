import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class storeDispatchState extends Component {

  componentWillUnmount() {
    this.props.actions.clearState();
  }

  click() {
      this.props.actions.clickBtn();
  }
  render() {
      let {isClicked} = this.props.state;
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!aa
            </Text>
            <Text style={styles.instructions} onPress = {()=>this.click()}>
                {isClicked? 'u,men,what is wrong?' : 'can you dare to click me?'}
            </Text>
            <Text style={styles.instructions} onPress = {()=>Actions.yh_reduxDemo()}>
                go to reduxDemo
            </Text>
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
    color: 'blue',
    marginTop: 10,
  },
});