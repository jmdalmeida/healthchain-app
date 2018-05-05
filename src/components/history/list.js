import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS,
  ScrollView
} from 'react-native';
import CategoryTitle from '../category-title';
import TrialListItem from '../trials/list-item';
import HistoryDetail from './detail';
import moment from 'moment';

export default class History extends Component {
  state = {
    history: [
      { title: 'Flu', type: 'medical', subtitle: 'asdasdsda', date: new Date(2018, 2, 10) },
      { title: 'Flu', type: 'wearable', subtitle: 'asdasdsda', date: new Date(2018, 2, 10) },
      { title: 'Flu', type: 'medical', subtitle: 'asdasdsda', date: new Date(2018, 2, 8) },
      { title: 'Flu', type: 'wearable', subtitle: 'asdasdsda', date: new Date(2018, 1, 1) },
      { title: 'Flu', type: 'wearable', subtitle: 'asdasdsda', date: new Date(2018, 2, 21) },
      { title: 'Flu', type: 'medical', subtitle: 'asdasdsda', date: new Date(2018, 2, 21) },
      { title: 'Flu', type: 'wearable', subtitle: 'yo', description: 'asdasdsda', date: new Date(2018, 3, 7) },
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
      component: HistoryDetail
    })
  }

  render() {
    let orderedHistory = this.state.history.sort((day1, day2) => day1.date > day2.date)

    let historyByDate = this.getHistoryByDate(orderedHistory);
    let days = Object.keys(historyByDate);

    return (
      <View style={styles.wrapper}>
        <ScrollView automaticallyAdjustContentInsets={false}>
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

const DayInHistory = ({ history, date, onPress }) => {
  let formattedDay = moment(parseInt(date, 10)).format('Do MMM');

  return (
    <View>
      <CategoryTitle text={formattedDay} style={{ text: styles.date }}/>
      {
        history.map((historyItem, index) => {
          let style = historyItem.type === 'medical' ? styles.medical : styles.wearable;
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
    marginTop: 64,
    flexGrow: 1,
    margin: 5,
    paddingBottom: 56
  },
  medical: {
    backgroundColor: 'green'
  },
  wearable: {
    backgroundColor: 'blue'
  },
  date: {
    textAlign: 'center',
    width: '100%',
    fontSize: 16
  }
});
