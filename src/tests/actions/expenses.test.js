import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startSetExpenses,
  setExpenses,
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove an expenses from firebase", done => {
  const store = createMockStore();
  const expense = expenses[2];
  store.dispatch(startRemoveExpense(expense)).then(() => {
    const actions = store.getActions();
    const id = expense.id;
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id,
    });
    return database
      .ref(`expenses/${id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
  });
});
test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    note: "new note value",
    createdAt: 0,
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note value",
      createdAt: 0,
    },
  });
});

test("should edit an expense from firebase", () => {
  const store = createMockStore();
  const { id } = expenses[1];
  const updates = {
    description: "this is a new description for the test object",
    note: "this is a new note",
    amount: 104300,
    createdAt: 50000000,
  };

  return store.dispatch(startEditExpense(id, updates)).then(() => {
    const action = store.getActions()[0];
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates,
    });
    return database
      .ref(`expenses/${id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toEqual(updates);
      });
  });
});

test("should set up add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to the database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to the database and store", done => {
  const store = createMockStore({});

  const expenseDefaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  return store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: { id: expect.any(String), ...expenseDefaults },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    })
    .catch(error => {
      console.log(error);
    });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore();
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
