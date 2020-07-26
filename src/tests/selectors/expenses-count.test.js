import expenses from '../fixtures/expenses';
import counter from '../../selectors/expenses-count';

test('should count the expenses when none exist', () => {
  const bag = undefined;
  const total = counter(bag);
  const expectedTotal = 0;
  expect(total).toBe(expectedTotal);
});

test('should count the expenses when all exist', () => {
  const bag = [...expenses];
  const total = counter(bag);
  const expectedTotal = bag.length;
  expect(total).toBe(expectedTotal);
});
