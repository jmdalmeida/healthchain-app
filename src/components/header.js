import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={[styles.wrapper, { backgroundColor: this.props.color }]}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 40,
    paddingBottom: 24
  },
  text: {
    color: 'white',
    fontSize: 36,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  }
});
