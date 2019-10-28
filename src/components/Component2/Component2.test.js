import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component2 } from './Component2';

describe('<Component2 />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Component2 />);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
