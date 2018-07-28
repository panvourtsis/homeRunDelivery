import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Heading from '@screens/Home/components/Heading/Heading'

describe('Testing Heading', () => {
  let wrapper
  const spyFn = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <Heading title={'Fresh Food'} onPress={spyFn} />
    )
  })
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })
  it('onPress it triggers function', () => {
    wrapper.dive().find('TouchableOpacity').simulate('press')
    expect(spyFn).toHaveBeenCalledTimes(1)
  })
})
