import React from 'react';
import { shallow } from 'enzyme';
import { Message } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Message />);
  expect(renderedComponent.find('.messages-message').length).toBe(1);
});
