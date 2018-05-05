import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS
} from 'react-native';

export default class TrialListItem extends Component {
  render() {
    const { title, subtitle, onPress = () => {} } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{subtitle}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    padding: 4
  },
  text: {
    backgroundColor: 'transparent'
  }
});
