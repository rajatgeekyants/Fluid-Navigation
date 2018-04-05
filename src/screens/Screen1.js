import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import {LogoImage} from '../../App';
import {StackNavigator} from 'react-navigation';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo">
          <LogoImage
            style={styles.Logo}
            source={require('../../assets/images/GeekyAnts.png')}
          />
        </Transition>
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>Welcome to GeekyAnts!</Text>
        </Transition>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('screen2')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  Logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
