import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import { ProductItem } from '@components/common/index'
import styles from './Category.style'

class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.props.products}
            renderItem={({item}) => <ProductItem product={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({product}) => ({
  products: product.categoryProducts
})

Category.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
}

export default connect(mapStateToProps)(Category)
