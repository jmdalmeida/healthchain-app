import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  NavigatorIOS,
} from 'react-native';

const icons = []

const Icon = require('../../assets/medical-vaccination.png');

export default class TrialListItem extends Component {
  render() {
    const { style: customStyles, icon, label = '', subtitle, photo, description, onPress = () => {} } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Photo source={Icon} style={customStyles}/>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{label.toUpperCase()}</Text>
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
      <Image style={styles.image} source={source}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
    padding: 24,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#efefef',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    marginLeft: 24
  },
  image: {
    width: 16,
    height: 16
  },
  label: {
    fontSize: 10,
    color: '#4a4a4a',
    backgroundColor: 'transparent'
  },
  photo: {
    borderRadius: 100,
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#555',
    fontWeight: 'bold',
    fontSize: 16
  }
});
