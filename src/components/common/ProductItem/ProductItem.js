import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './ProductItem.style'

const ProductItem = ({product}) => (
  <View style={styles.container}>
    <FastImage
      style={styles.image}
      source={{
        uri: product.primary_image_url,
        priority: FastImage.priority.normal
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
    <Text style={styles.price}>{`£${parseFloat(product.price).toFixed(2)}`}</Text>
    <Text style={styles.heading}>{product.name}</Text>

  </View>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    min_quantity: PropTypes.string.isRequired,
    default_quantity: PropTypes.string.isRequired,
    quantity_step_size: PropTypes.number.isRequired,
    storage_temperature: null,
    purchasing_velocity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    supplier_slug: PropTypes.string.isRequired,
    primary_image_zoom_url: PropTypes.string.isRequired,
    primary_image_url: PropTypes.string.isRequired,
    measurement: PropTypes.number.isRequired,
    has_description: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    scooter_box_suitable: PropTypes.bool.isRequired
  }).isRequired
}

export { ProductItem }
