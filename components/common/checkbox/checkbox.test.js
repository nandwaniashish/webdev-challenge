import React from 'react'
import { render, mount } from 'enzyme'
import Checkbox from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('checkbox component', () => {
  const sampleLabel = 'Sample label'
  it('renders default', () => {
    const wrapper = render(
      <Checkbox id="check-test-1" label={sampleLabel}></Checkbox>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onChangeHandler if checked', () => {
    const onMockChange = jest.fn()
    const wrapper = mount(
      <Checkbox
        id="hello"
        label="whi"
        checked={false}
        onChange={onMockChange}
      ></Checkbox>
    )
    wrapper.find('input').simulate('change')

    expect(onMockChange).toHaveBeenCalled()
  })
})
