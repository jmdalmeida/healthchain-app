import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import Header from './header';

export default class Profile extends Component {
  state = {
    basicInfo: {
      name: 'Daniel Francisco',
      age: 24,
      profilePhoto: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/21728240_1655863894423805_1719636342345520942_n.jpg?_nc_cat=0&oh=57c828f59b2ded8504e17201461146b9&oe=5B91FFB1',
      gender: 'Male'
    },
    stats: [
      { type: 'height', value: '1,68 m', uri: require(`../assets/height.png`), toUpdate: true },
      { type: 'weight', value: '70 Kg', uri: require(`../assets/weight.png`), toUpdate: true },
      { type: 'blood-type', value: 'A+', uri: require(`../assets/blood-type.png`), toUpdate: false },
      { type: 'location', value: 'Portugal', uri: require(`../assets/location.png`), toUpdate: true }
    ]
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Header text="Profile" color="#5856d6" />
        <View style={styles.basicInfoWrapper}>
          <View style={styles.basicInfoProfilePhoto}>
            <Image style={{ width: 120, height: 120 }} source={{ uri: this.state.basicInfo.profilePhoto }} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.basicInfoTitle}>{this.state.basicInfo.name}</Text>
            <Text style={styles.basicInfoSubtitle}>{`${this.state.basicInfo.age} years old`}</Text>
            <Text style={styles.basicInfoSubtitle}>{this.state.basicInfo.gender}</Text>
          </View>
        </View>
        <View style={styles.statsWrapper}>
          {this.state.stats.map((stat) => <Stat value={this.state} key={stat.type} {...stat}></Stat>)}
        </View>
      </View>
    );
  }
}

const UpdateButton = () => {
  return (
    <View style={styles.updateButtonWrapper}>
      <TouchableOpacity style={styles.updateButton} onPress={() => {}}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stat = ({ type, value, uri, toUpdate }) => {
  return (
    <View style={styles.statWrapper}>
      <Image style={styles.statIcon} source={uri} />
      <View style={styles.statTextWrapper}>
        <Text style={styles.statsTitle}>{type.toUpperCase()}</Text>
        <Text style={styles.statsSubtitle}>{value}</Text>
      </View>
      {toUpdate && <UpdateButton/>}
    </View>
  )
}

const styles = StyleSheet.create({
  // Basic Info
  basicInfoWrapper: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#5856d67f',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  basicInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: 'white'
  },
  basicInfoSubtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white'
  },
  basicInfoProfilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white'
  },

  // Stats
  statsWrapper: {
    margin: 20
  },
  statWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statTextWrapper: {
  },
  statsTitle: {
    fontSize: 10,
    color: '#4a4a4a'
  },
  statsSubtitle: {
    fontSize: 15,
    color: '#4a4a4a',
    fontWeight: 'bold'
  },
  statIcon: {
    height: 30,
    width: 30,
    margin: 15
  },

  // Update Button
  updateButtonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row'
  },
  updateButton: {
    justifyContent: 'center',
    backgroundColor: '#5856d6',
    alignItems: 'center',
    borderRadius: 20,
    height: 30,
    width: 80
  },
  updateButtonText: {
    textAlign: 'center',
    color: 'white'
  },

  // Global
  wrapper: {
    flexGrow: 1,
  }
});
