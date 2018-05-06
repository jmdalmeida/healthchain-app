import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const Stat = ({ style, type, value, uri, showButton, Button, IconComponent }) => {
  return (
    <View style={[styles.statWrapper, style]}>
      {IconComponent ? <IconComponent /> : <Image style={styles.statIcon} source={uri} />}
      <View style={styles.statTextWrapper}>
        <Text style={styles.statsTitle}>{type.toUpperCase()}</Text>
        <Text style={styles.statsSubtitle}>{value}</Text>
      </View>
      {showButton && <Button/>}
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default Stat;
