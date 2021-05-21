import React from 'react'
import { mount } from 'enzyme'
import HidePeople from './index'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('HidePeople component', () => {
  let wrapper
  const mockOnHide = jest.fn()
  beforeEach(() => {
    wrapper = mount(<HidePeople onHide={mockOnHide}></HidePeople>)
  })
  it('should pass a onHide handler', () => {
    expect(wrapper.prop('onHide')).toEqual(mockOnHide)
  })
})
