import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS,
  Image,
  Button
} from 'react-native';

export default class Profile extends Component {
  state={
    basicInfo: {
      name: 'Daniel Francisco',
      age: 24,
      profilePhoto: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/21728240_1655863894423805_1719636342345520942_n.jpg?_nc_cat=0&oh=57c828f59b2ded8504e17201461146b9&oe=5B91FFB1',
      gender: 'Male'
    },
    stats: [
      { type: 'nationality', value: 'Portugal', uri: require(`../assets/nationality.png`)},
      { type: 'height', value: '1,68m', uri: require(`../assets/height.png`)},
      { type: 'blood-type', value: 'A+', uri: require(`../assets/blood-type.png`)},
      { type: 'weight', value: '70 Kg', uri: require(`../assets/weight.png`)},
    ]
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.basicInfoWrapper}>
          <Image
            style={styles.basicInfoProfilePhoto}
            source={{uri: this.state.basicInfo.profilePhoto}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={styles.basicInfoText}>{this.state.basicInfo.name}</Text>
            <Text style={styles.basicInfoText}>{this.state.basicInfo.age}, {this.state.basicInfo.gender}</Text>
          </View>
        </View>
        
        {this.state.stats.map((stat) => <Stat key={stat.type} {...stat}></Stat>)}
      </View>
    );
  }
}

const Stat = ({ type, value, uri }) => {
  return (
    <View style={styles.statsWrapper}>
      <Image style={{height: 40, width: 40}} source={ uri }/>
      <Text style={styles.detail}>{type}, {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // Basic Info
  basicInfoWrapper: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10
  },
  basicInfoText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  basicInfoProfilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  // Stats
  statsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'red'
  },
  statsText: {
    margin: 10
  },

  // Global
  wrapper: {
    marginTop: 64,
    flexGrow: 1,
    margin: 5
  }
});
