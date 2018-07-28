import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import styles from './Heading.style'

const Heading = ({title, onPress}) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{title}</Text>

    <TouchableOpacity
      style={styles.viewMoreContainer}
      onPress={onPress}>
      <Text style={styles.viewMore}>View More</Text>
      <Feather
        style={styles.viewMore}
        name='chevron-right'
        size={22}
      />
    </TouchableOpacity>
  </View>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Heading
