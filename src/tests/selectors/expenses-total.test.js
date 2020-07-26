import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses are received', () => {
  const bag = [];
  const total = expensesTotal(bag);
  const expectedTotal = 0;
  expect(total).toBe(expectedTotal);
});

test('should correctly add up the values of a single expense', () => {
  const bag = [expenses[1]];
  const total = expensesTotal(bag);
  const expectedTotal = 109500;
  expect(total).toBe(expectedTotal);
});

test('should correctly add up the values of all expenses', () => {
  const bag = [...expenses];
  const total = expensesTotal(bag);
  const expectedTotal = 114195;
  expect(total).toBe(expectedTotal);
});
