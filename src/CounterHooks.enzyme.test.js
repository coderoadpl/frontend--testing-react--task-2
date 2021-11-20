import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import CounterHooks from './CounterHooks'

Enzyme.configure({ adapter: new Adapter() })

describe('CounterHooks test – Enzyme', () => {
  it('should render valid initial number', () => {
    const wrapper = shallow(<CounterHooks />)

    const h1 = wrapper.find('h1')

    expect(h1.text()).toBe('0')
  })

  it('should render valid number after button click', () => {
    const wrapper = shallow(<CounterHooks />)
    const instance = wrapper.instance()

    instance.setState({ number: 5 })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('5')
  })
})
