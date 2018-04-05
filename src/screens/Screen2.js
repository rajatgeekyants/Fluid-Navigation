import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Transition} from 'react-navigation-fluid-transitions';
import {LogoImage} from '../../App';
import {StackNavigator} from 'react-navigation';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo">
          <LogoImage
            style={styles.Logo}
            source={require('../../assets/images/RishabhPandey.png')}
          />
        </Transition>
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>
            <Text style={{fontWeight: 'normal'}}>
              Yeh Kis Screen pe aa gaye ho!
            </Text>
          </Text>
        </Transition>
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>Wapas chale jao!</Text>
        </Transition>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
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
});
