import React from 'react'
import { shallow } from 'enzyme'
import Search from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from '../common/input'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('Search component', () => {
  const mockOnChange = jest.fn()
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Search
        searchTerm="helo"
        onSearch={mockOnChange}
        onChange={mockOnChange}
      ></Search>
    )
  })

  it('renders Input component', () => {
    expect(wrapper.find(Input)).toHaveLength(1)
  })

  it('sets onSearch handler to onChange', () => {
    expect(wrapper.find(Input).prop('onChange')).toBe(mockOnChange)
  })

  it('sets the value equal to seach term', () => {
    expect(wrapper.find(Input).prop('value')).toBe('helo')
  })
})
