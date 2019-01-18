import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/app/screens/home/Home';

describe('Testando o Home Component', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
