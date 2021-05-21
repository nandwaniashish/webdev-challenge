import React from 'react'
import { mount } from 'enzyme'
import Input from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('Input component', () => {
  const mockonBlur = jest.fn()
  const sampleId = 'hey'
  const mockOnChange = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Input
        id={sampleId}
        onBlur={mockonBlur}
        label="dd"
        onChange={mockOnChange}
      ></Input>
    )
  })
  it('renders default', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onChangeHandler when present', () => {
    wrapper.find('input').simulate('change')
    expect(mockOnChange).toHaveBeenCalled()
  })
  it('calls onBlurHandler when present', () => {
    wrapper.find('input').simulate('click')
    wrapper.find('input').simulate('blur')
    expect(mockonBlur).toHaveBeenCalled()
  })
  it('adds the label', () => {
    expect(wrapper.find('label').exists()).toBe(true)
  })
  it('sets the label for attribute as id of the input', () => {
    console.log(wrapper.find('label').props())
    expect(wrapper.find('label').prop('htmlFor')).toBe(sampleId)
  })
})
