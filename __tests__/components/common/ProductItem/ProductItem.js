import 'react-native'
import React from 'react'
import productMock from '@tests/__mocks__/product.json'
import { ProductItem } from '@components/common/index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ProductItem product={productMock} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
