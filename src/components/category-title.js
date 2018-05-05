import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS
} from 'react-native';

export default class CategoryTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: '500'
  }
});
