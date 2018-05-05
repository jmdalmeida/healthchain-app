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
    const { title, subtitle, photo, description, onValueChange, onPress = () => {} } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onValueChange}>
        <Switch value={this.props.value} onValueChange={onValueChange} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{subtitle}</Text>
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
    height: 64,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
    padding: 4,
    flexDirection: 'row'
  },
  textContainer: {
    width: '50%',
    marginLeft: 8
  },
  photo: {
    borderRadius: 100,
    height: 32,
    width: 32,
    backgroundColor: 'blue'
  },
  text: {
    backgroundColor: 'transparent'
  }
});
