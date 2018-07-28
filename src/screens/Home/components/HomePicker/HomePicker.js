import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import Feather from 'react-native-vector-icons/Feather'
import styles from './HomePicker.style'

const data = ['tesco', 'waitrose']

const HomePicker = ({selectedSupplier, supplierPickerChange}) => (
  <View style={styles.container}>
    <ModalDropdown
      options={data}
      onSelect={(index, value) => supplierPickerChange(value)}
      defaultIndex={1}
      defaultValue={data[0]}
      dropdownStyle={styles.dropDown}
    >
      <View style={styles.dropDownContainer}>
        <Text style={styles.dropDownText}>{selectedSupplier}</Text>
        <Feather
          name='chevron-down' size={25} color='#A1A1A1'
        />
      </View>
    </ModalDropdown>
  </View>
)

HomePicker.propTypes = {
  selectedSupplier: PropTypes.string,
  supplierPickerChange: PropTypes.func
}

export default HomePicker
