import { shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Test from './'
import { configure } from 'enzyme'
configure({ adapter: new Adapter() }) //TODO: move this to jest config

describe('With Enzyme', () => {
  it('shows "You have got to love testing?"', () => {
    const app = shallow(<Test />)
    expect(app.find('div').text()).toEqual('You have got to love testing?')
  })
})
