import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, View, Image } from 'react-native'
import { DotIndicator } from 'react-native-indicators'
import Heading from './components/Heading/Heading'
import { ProductItem } from '@components/common/index'
import HomePicker from './components/HomePicker/HomePicker'
import bgImage from '../../assets/images/bgImage.png'
import { getProducts, selectCategory, supplierPickerChange } from '@actions'
import styles from './Home.style'

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <HomePicker
          selectedSupplier={navigation.state.params.selectedSupplier}
          supplierPickerChange={navigation.state.params.supplierPickerChange}
        />
      )
    }
  };

  componentWillMount () {
    this.props.getProducts(this.props.selectedSupplier)
    this.props.navigation.setParams({
      supplierPickerChange: this.props.supplierPickerChange,
      selectedSupplier: this.props.selectedSupplier
    })
  }

  componentWillReceiveProps ({navigation, selectedSupplier, supplierPickerChange}) {
    if (navigation.state.params && navigation.state.params.selectedSupplier !== selectedSupplier) {
      navigation.setParams({
        supplierPickerChange,
        selectedSupplier
      })
    }
  }

  render () {
    const {
      loading,
      suppliers,
      selectCategory
    } = this.props
    if (loading) {
      return (
        <View style={{flex: 1, height: null, alignItems: 'center', justifyContent: 'center'}}>
          <DotIndicator size={12} count={3} color='#7ca549' />
        </View>
      )
    }
    return (
      <View style={[styles.container, {flex: 1}]}>
        <ScrollView
          style={{flex: 1}}
        >
          <View style={styles.centralImage}>
            <Image style={styles.bgImage} source={bgImage} />
            <View style={styles.bgImageOverlay} />
          </View>
          <View>
            {suppliers.map(({products, category}, index) => (
              <View key={index}>
                <Heading title={category.name} onPress={() => selectCategory(category)} />
                <ScrollView horizontal>
                  {products.length > 0 && products.map((product, index) => <ProductItem key={index} product={product} />)}
                </ScrollView>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({product}) => ({
  suppliers: product.suppliers,
  selectedSupplier: product.selectedSupplier,
  loading: product.loading
})

Home.propTypes = {
  suppliers: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.object.isRequired,
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
      )
    })
  ).isRequired,
  selectedSupplier: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, {getProducts, selectCategory, supplierPickerChange})(Home)
