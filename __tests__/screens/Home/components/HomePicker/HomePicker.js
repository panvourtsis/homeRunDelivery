import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import HomePicker from '@screens/Home/components/HomePicker/HomePicker'

describe('Testing HomePicker', () => {
  let wrapper
  const spyFn = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <HomePicker selectedSupplier={'tesco'} supplierPickerChange={spyFn} />
    )
  })
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })
  it('changes the value on change', () => {
    wrapper.dive().find('ModalDropdown').simulate('select')
    expect(spyFn).toHaveBeenCalledTimes(1)
  })
})
