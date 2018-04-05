import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {FluidNavigator, Transition} from 'react-navigation-fluid-transitions';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

export const LogoImage = props => (
  <Image source={props.source} style={props.style} />
);

const Navigator = FluidNavigator({
  screen1: {screen: Screen1},
  screen2: {screen: Screen2},
});

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
