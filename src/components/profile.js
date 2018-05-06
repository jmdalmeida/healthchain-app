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
import Stat from './stat';

export default class Profile extends Component {
  state = {
    basicInfo: {
      name: 'Dalai Sarda',
      age: 24,
      profilePhoto: require('../assets/sinatra.jpg'),
      gender: 'Male',
      nationality: 'Portuguese'
    },
    stats: [
      { type: 'height', value: '1,68 m', uri: require(`../assets/height.png`), showButton: true, Button: UpdateButton },
      { type: 'weight', value: '70 Kg', uri: require(`../assets/weight.png`), showButton: true, Button: UpdateButton },
      { type: 'blood-group', value: 'A+', uri: require(`../assets/blood-group.png`), showButton: false },
      { type: 'location', value: 'Portugal', uri: require(`../assets/location.png`), showButton: true, Button: UpdateButton }
    ]
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Header text="Profile" color="#5856d6" />
        <View style={styles.basicInfoWrapper}>
          <View style={styles.basicInfoProfilePhoto}>
            <Image style={{ width: 120, height: 120 }} source={ this.state.basicInfo.profilePhoto } />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.basicInfoTitle}>{this.state.basicInfo.name}</Text>
            <Text style={styles.basicInfoSubtitle}>{`${this.state.basicInfo.age} years old`}</Text>
            <Text style={styles.basicInfoSubtitle}>{this.state.basicInfo.gender}</Text>
            <Text style={styles.basicInfoSubtitle}>{this.state.basicInfo.nationality}</Text>
          </View>
        </View>
        <View style={styles.statsWrapper}>
          {this.state.stats.map((stat) => <Stat value={this.state} key={stat.type} {...stat}></Stat>)}
        </View>
      </View>
    );
  };
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
    borderColor: 'white',
    borderWidth: 3,
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
    margin: 15,
    resizeMode: 'contain'
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
