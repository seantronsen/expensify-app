import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if ID is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test("should add an expense to the fixture expenses array", () => {
  const expense = {
    description: "This is a text expense",
    note: "This is a test note",
    amount: 122000,
    createdAt: moment(),
    id: "3",
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense

test("should edit an expense", () => {
  const id = expenses[1].id;
  const description = "Noob Noob";
  const updates = {
    description,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

// should not edit an expense if expense is not found
test("should not edit an expense for inexistent ID values", () => {
  const id = "4";
  const description = "Noob Noob";
  const updates = {
    description,
  };

  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
