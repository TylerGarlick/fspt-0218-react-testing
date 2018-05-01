import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const name = wrapper.state('name')

  const welcomeMessage = wrapper.contains(<h1 className="App-title">Welcome to {name}</h1>)
  expect(welcomeMessage).toBeTruthy()
})

it('says Welcome to Tyler when the button is clicked', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('name')).toBe('React')

  const button = wrapper.find('button').first()
  expect(button).toBeTruthy()

  button.simulate('click')
  expect(wrapper.state('name')).toBe('Tyler')






})
