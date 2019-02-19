import React from 'react';
import { shallow } from 'enzyme';

const Text = () => <p>Text</p>;

describe('Example', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Text />);
    expect(wrapper).toMatchSnapshot('<Text /> Snapshot');
  });

})
