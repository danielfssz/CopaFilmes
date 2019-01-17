import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Testando o App Component', () => {
  it('Deve renderizar corretamente', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
