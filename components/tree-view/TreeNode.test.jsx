import React from 'react'
import { shallow } from 'enzyme'
import TreeNode from './TreeNode'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('Tree Node component', () => {
  const mockOnChange = jest.fn()
  const mockOnSelect = jest.fn()
  const mockOnBlur = jest.fn()
  const mockNode = { name: 'ashish', id: '5', children: [] }
  const expandedNodes = { 5: true }
  const mockOnToggle = jest.fn()

  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <TreeNode
        node={mockNode}
        onSelect={mockOnSelect}
        onChange={mockOnChange}
        activeNode={mockNode}
        expandedNodes={expandedNodes}
        onToggle={mockOnToggle}
        onBlur={mockOnBlur}
      ></TreeNode>
    )
  })

  it('renders span with a button role', () => {
    expect(wrapper.find('span')).toHaveLength(1)
    expect(wrapper.find('span').prop('role')).toEqual('button')
  })

  it('sets tabIndex to 0', () => {
    expect(wrapper.find('span').prop('tabIndex')).toEqual('0')
  })

  it('renders span with node name', () => {
    expect(wrapper.find('span').text().includes(mockNode.name)).toBe(true)
  })
  it('calls onSelect on click', () => {
    wrapper.find('span').simulate('click', {
      preventDefault: () => {},
    })
    expect(mockOnSelect).toHaveBeenCalled()
  })
  it('calls onBlurHandler when present', () => {
    wrapper.find('span').simulate('click', {
      preventDefault: () => {},
    })
    wrapper.find('span').simulate('blur')
    expect(mockOnBlur).toHaveBeenCalled()
  })
})
