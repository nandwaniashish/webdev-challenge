import React from 'react'
import { shallow } from 'enzyme'
import PageHeader from './index'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() }) //TODO: move this to jest config
describe('Label component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <PageHeader heading="hello" subHeading="fff"></PageHeader>
    )
  })
  it('should render render h1 with the heading', () => {
    expect(wrapper.find('h1').contains('hello')).toBe(true)
  })
  it('should render render a subheading with p', () => {
    expect(wrapper.find('p').contains('fff')).toBe(true)
  })
  it('should wrap h1 and p in a header tag', () => {
    expect(wrapper.find('header')).toHaveLength(1)
    expect(wrapper.find('header').children().at(1).type()).toBe('p')
  })
})
