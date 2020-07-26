import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

// Create the test file
// Grab the imports
// Render ExpenseListItem with fixture data
// Create snapshot

test('should render ExpenseListItem with expense fixture data', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
