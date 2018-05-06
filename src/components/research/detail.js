import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS
} from 'react-native';

export default class TrialDetail extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Cenas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 64,
    flexGrow: 1,
    padding: 8
  }
});
