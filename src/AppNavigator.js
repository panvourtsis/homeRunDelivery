import React from 'react'
import TransitionConfig from './transitionConfig'
import { TouchableOpacity, Image, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { addNavigationHelpers, StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import AuthLoadingScreen from './components/AuthLoadingScreen'
// screens
import Home from './screens/Home/Home'
import Category from './screens/Category/Category'

// images
import shoppingCartImage from './assets/images/shopping_cart/shopping_cart.png'
import storeIcon from './assets/images/store/storeIcon.png'
import searchIcon from './assets/images/search/search.png'
import menuIcon from './assets/images/menu/menu.png'
import listIcon from './assets/images/list/list.png'

const App = StackNavigator({
  homeSc: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<View />)
    })
  },
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
    })
  }
},
{
  transitionConfig: TransitionConfig,
  initialRouteParams: { transition: 'fade' },
  navigationOptions: ({navigation}) => ({
    headerStyle: { paddingLeft: 20, paddingRight: 20, elevation: 0, borderBottomWidth: 1, borderBottomColor: '#D4D4D4' },
    headerTitleStyle: { textAlign: 'center', flex: 1, color: '#767676' },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Feather
          name='chevron-left' size={32} color='#7ca549'
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <Image source={shoppingCartImage} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    )
  })
})

export const AppNavigator = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator({
      Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={storeIcon}
              style={{tintColor: tintColor, width: 27, height: 25, resizeMode: 'cover'}}
            />
          )
        })
      },
      Search: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'Search',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={searchIcon}
              style={{tintColor: tintColor, width: 23, height: 25, resizeMode: 'cover'}}
            />
          )
        })
      },
      Menu: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'Browse',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={menuIcon}
              style={{tintColor: tintColor, width: 23, height: 25, resizeMode: 'cover'}}
            />
          )
        })
      },
      List: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'My Lists',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={listIcon}
              style={{tintColor: tintColor, width: 25, height: 25, resizeMode: 'cover'}}
            />
          )
        })
      },
      More: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'more',
          tabBarIcon: ({ tintColor }) => (
            <Feather
              onPress={() => navigation.goBack()}
              name='more-horizontal' size={32} color={tintColor}
            />
          )
        })
      }
    },
    {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        renderIndicator: () => null,
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 12
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: '#7ca549',
        inactiveTintColor: '#DADADA',
        style: {
          backgroundColor: '#f6f6f6'
        }
      }
    })
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const addListener = createReduxBoundAddListener('root')

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      addListener,
      state: nav
    })}
  />
)

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
