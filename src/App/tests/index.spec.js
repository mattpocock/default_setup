/*eslint-disable*/
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from '../index';

test('Should render a Hello World', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h1')).to.have.length(1);
});
