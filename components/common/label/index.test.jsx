import React from 'react'
import { shallow } from 'enzyme'
import Label from './index'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('Label component', () => {
  const sampleLabel = 'Sample label children'
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Label htmlFor="hello">{sampleLabel}</Label>)
  })
  it('should render children', () => {
    expect(wrapper.find('label').contains(sampleLabel)).toBe(true)
  })
})
