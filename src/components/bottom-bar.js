import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  NavigatorIOS,
} from 'react-native';

export default class BottomBar extends Component {
  onPress(item) {
    this.props.onItemPress(item)
  }

  render() {
    const { title, photo = 'asdsa', activeItem } = this.props;

    return (
      <View style={styles.container}>
        { 
          this.props.items.map((menuItem) => {
            return (
              <BottomBarItem 
                isActive={menuItem.route === activeItem} 
                onPress={this.onPress.bind(this, menuItem)} 
                key={menuItem.route} {...menuItem} />
            )
          })
        }
      </View>
    );
  }
}

const BottomBarItem = ({ isActive, icon, title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.item, isActive ? styles.activeItem : {}]} onPress={onPress}>
      <Image source={icon} style={styles.iconImage}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderColor: '#ccc',
    marginBottom: 8,
    flexDirection: 'row',
    width: '100%',
    shadowColor: '#ccc',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between'
  },
  activeItem: {
    backgroundColor: 'blue'
  },
  iconImage: {
    height: 16,
    width: 16
  },
  item: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    width: '50%',
    marginLeft: 8
  },
  photo: {
    borderRadius: 100,
    height: 32,
    width: 32,
  },
  text: {
    backgroundColor: 'transparent',
    marginTop: 4
  }
});

