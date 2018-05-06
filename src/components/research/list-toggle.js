import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
  NavigatorIOS
} from 'react-native';

export default class TrialListItem extends Component {
  render() {
    const { label, subtitle, photo, description, onValueChange, onPress = () => {} } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onValueChange}>
        <Switch style={styles.switch} value={this.props.value} onValueChange={onValueChange} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{label}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const Photo = ({ source }) => {
  return (
    <View style={styles.photo}>
      <Image source={source}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    height: 24,
    width: 48
  },
  textContainer: {
    flex: 1,
    marginLeft: 16
  },
  photo: {
    borderRadius: 100,
    height: 32,
    width: 32,
    backgroundColor: 'blue'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#4a4a4a'
  }
});
