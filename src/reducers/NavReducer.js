import { AppNavigator } from '../AppNavigator'

const router = AppNavigator.router
const mainNavAction = router.getActionForPathAndParams('AuthLoading')
const initialNavState = router.getStateForAction(mainNavAction)

const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state)
}

export default NavReducer
