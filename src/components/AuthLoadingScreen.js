import React, {Component} from 'react'
import { WaveIndicator } from 'react-native-indicators'
import { View, Image, Text } from 'react-native'

class AuthLoadingScreen extends Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    setTimeout(() => {
      this.props.navigation.navigate('App')
    }, 1500)
  };

  render () {
    const {
      containerStyle,
      logoImageStyle,
      textStyle
    } = style
    return (
      <View style={{flex: 1}}>
        <View style={containerStyle}>
          <View>
            <Image
              style={logoImageStyle}
              source={require('../assets/images/logo-homerun.png')}
            />
            <Text style={textStyle}>Deliver anywhere</Text>
            <View style={{flex: 1, marginTop: 30}}>
              <WaveIndicator size={50} color='black' waveMode='outline' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const style = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 15
  },
  logoImageStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 270,
    height: 90,
    marginBottom: 15,
    resizeMode: 'contain'
  }
}

export default AuthLoadingScreen
