import React from 'react';
import { shallow } from 'enzyme';
import Result from '../src/app/screens/result/Result';

describe('Testando o Result Component', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper).toMatchSnapshot();
  });
});
