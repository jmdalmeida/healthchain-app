import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  NavigatorIOS
} from 'react-native';
import Header from './header';
import Stat from './stat';
import CategoryTitle from './category-title';

export default class Insurance extends Component {
  state = {
    insurance: {
      company: 'Fidelidade'.toUpperCase(),
      price: '58.76€',
      period: 'month',
      currentPlan: 'A'
    },
    plans: [
      { type: 'Insurance company B', letter: 'B', value: '52.35€', showButton: true, Button: ChangeButton },
      { type: 'Insurance company C', letter: 'C', value: '53.75€', showButton: true, Button: ChangeButton },
      { type: 'Insurance company D', letter: 'D', value: '56.33€', toUpdate: false },
      { type: 'Insurance company Z', letter: 'Z', isOther: true, value: '61.99€', showButton: true, Button: ChangeButton }
    ]
  }
  render() {
    let otherPlans = this.state.plans.filter(plan => plan.isOther)
    return (
      <View style={styles.wrapper}>
        <Header text="Insurance" color="#ff3b30" />
        <ScrollView style={styles.scrollView} contentInset={{bottom: 150}}>
          <View style={styles.basicInfoWrapper}>
            <View style={styles.basicInfoProfilePhoto}>
              <Text style={styles.planText}>{this.state.insurance.currentPlan}</Text>
            </View>
            <View style={{ marginLeft: 20, justifyContent: 'center' }}>
              <Text style={styles.basicInfoTitle}>Current plan</Text>
              <Text style={styles.basicInfoSubtitle}>{this.state.insurance.company} </Text>
              <Text style={styles.price}>{this.state.insurance.price}<Text style={styles.period}>{`/${this.state.insurance.period}`}</Text></Text>
            </View>
          </View>
          <View>
            <CategoryTitle style={{ wrapper: styles.categoryTitle }} text="Suggested plans" />
            <View style={{margin: 20}}>
              {this.state.plans.map((stat) => <Stat style={styles.stat} IconComponent={() => <IconComponent letter={stat.letter}/>} value={this.state} key={stat.type} {...stat}></Stat>)}
            </View>
            <CategoryTitle style={{ wrapper: styles.categoryTitle }} text="Other plans" />
            <View style={{margin: 20}}>
              {otherPlans.map((stat) => <Stat style={styles.stat} IconComponent={() => <IconComponent letter={stat.letter}/>} value={this.state} key={stat.type} {...stat}></Stat>)}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const IconComponent = ({ letter }) => {
  return (
    <View style={styles.iconComponent}>
      <Text style={styles.iconComponentText}>{letter}</Text>
    </View>
  )
}

const ChangeButton = () => {
  return (
    <View style={styles.updateButtonWrapper}>
      <TouchableOpacity style={styles.updateButton} onPress={() => {}}>
        <Text style={styles.updateButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  scrollView: {
    paddingBottom: 56
  },
  stat: {
    margin: 8
  },
  categoryTitle: {
    paddingTop: 16
  },

  iconComponent: {
    borderWidth: 2,
    borderColor: '#d8d8d8',
    borderRadius: 100,
    overflow: 'hidden',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  iconComponentText: {
    fontSize: 14,
    color: '#d8d8d8',
    fontWeight: 'bold'
  },
  // Basic Info
  basicInfoWrapper: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#ff3b307f',
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
    fontSize: 12,
    marginBottom: 5,
    color: 'white'
  },
  basicInfoProfilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  planText: {
    fontSize: 64,
    color: 'white',
    textAlign: 'center',
  },
  period: {
    fontSize: 10,
    fontWeight: 'normal',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  // Update Button
  updateButtonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row'
  },
  updateButton: {
    justifyContent: 'center',
    backgroundColor: '#ff3b30',
    alignItems: 'center',
    borderRadius: 20,
    height: 30,
    width: 80
  },
  updateButtonText: {
    textAlign: 'center',
    color: 'white'
  },

});
