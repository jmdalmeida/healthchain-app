import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  NavigatorIOS,
} from 'react-native';

export default class TrialListItem extends Component {
  render() {
    const { style: customStyles, title, subtitle, photo, description, onPress = () => {} } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Photo source={{uri: photo}} style={customStyles}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          {subtitle && <Text style={styles.text}>{subtitle}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

const Photo = ({ source, style }) => {
  return (
    <View style={[styles.photo, style]}>
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
