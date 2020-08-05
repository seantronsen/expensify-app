import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";
import { add } from "numeral";
// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses,
});

// 1. fetch all expense data from the data source
// 2. parse that data into an array
// 3. Dispatch SET_EXPENSES

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(item => {
          expenses.push({ ...item.val(), id: item.key });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
