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
    let { style: customStyles = {} } = this.props;
    return (
      <View style={[styles.container, customStyles.wrapper]}>
        <Text style={[styles.text, customStyles.text]}>{this.props.text}</Text>
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
