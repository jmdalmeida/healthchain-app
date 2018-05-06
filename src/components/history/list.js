import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS,
  ScrollView
} from 'react-native';
import moment from 'moment';
import CategoryTitle from '../category-title';
import TrialListItem from '../research/list-item';
import HistoryDetail from './detail';
import Header from '../header';

const MedicalPrescriptionIcon = require('../../assets/medical-prescription.png');
const MedicalAppointmentIcon = require('../../assets/medical-appointment.png');
const VaccinationIcon = require('../../assets/medical-vaccination.png');
const WearableIcon = require('../../assets/wearable.png');

export default class History extends Component {
  state = {
    history: [
      { label: 'Medical prescription', icon: MedicalPrescriptionIcon, subtitle: 'Cough syrup', date: new Date(2018, 4, 5) },
      { label: 'Medical appointment', icon: MedicalPrescriptionIcon, subtitle: 'General medical examination', date: new Date(2018, 4, 5) },
      { label: 'Vacination', icon: VaccinationIcon, subtitle: 'Flu shot', date: new Date(2018, 3, 29) },
      { label: 'Medical appointment', icon: MedicalAppointmentIcon, subtitle: 'General medical examination', date: new Date(2018, 3, 29) },
      { label: 'Wearable', icon: WearableIcon, subtitle: 'Ran 5km', date: new Date(2018, 3, 29) },
      { label: 'Vacination', icon: VaccinationIcon, subtitle: 'Flu shot', date: new Date(2018, 3, 12) },
    ]
  }

  getHistoryByDate(history) {
    return history.reduce((acc, entry) => {
      let { date } = entry;
      let objectKey = this.getDateAsKey(new Date(date));

      let arr = acc[objectKey] || []

      acc[objectKey] = arr.concat(entry)

      return acc;
    }, {});
  }

  getDateAsKey(date) {
    return date.getTime().toString();
  }

  onHistoryItemPress({ title }) {
    console.log(...arguments)
    this.props.navigator.push({
      title,
      component: HistoryDetail,
      route: 'history-detail'
    })
  }

  render() {
    let orderedHistory = this.state.history.sort((day1, day2) => day1.date < day2.date)

    let historyByDate = this.getHistoryByDate(orderedHistory);
    let days = Object.keys(historyByDate);

    return (
      <View style={styles.wrapper}>
        <Header text="History" color="#007aff" />
        <ScrollView style={styles.scrollView} contentInset={{bottom: 150}}>
          {
            days.map((day, index) => {
              return (
                <DayInHistory key={`${day}-${index}`} onPress={this.onHistoryItemPress.bind(this)} history={historyByDate[day]} date={day} />
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const DayInHistory = ({ history, date, onPress, style = {} }) => {
  let formattedDay = moment(parseInt(date, 10)).format('Do MMM');

  return (
    <View>
      <CategoryTitle text={formattedDay} />
      {
        history.map((historyItem, index) => {
          return (
            <TrialListItem onPress={() => onPress(historyItem)} key={`${index}`} style={style} {...historyItem} />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    paddingBottom: 56,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 16,
  }
});
