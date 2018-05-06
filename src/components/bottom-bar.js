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
    const { activeItem } = this.props;

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

const BottomBarItem = ({ isActive, icons, title, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.item, isActive ? styles.activeItem : {}]} onPress={onPress}>
      <Image source={isActive ? icons.active : icons.default } style={styles.iconImage}/>
      <Text style={[styles.text, isActive ? { color } : {}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    marginBottom: 8,
    flexDirection: 'row',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  activeItem: {
    height: 90,
    shadowColor: '#ccc',
    shadowOpacity: 1,
    shadowRadius: 3,
    zIndex: 2
  },
  iconImage: {
    height: 32,
    width: 32
  },
  item: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 82,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  textContainer: {
    width: '50%',
    marginLeft: 8
  },
  text: {
    backgroundColor: 'transparent',
    marginTop: 4,
    fontSize: 14
  }
});

