import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let wrapper, history, editExpense, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />
  );
});

test("should render the edit expense page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle the edit expense action through the use of spies", () => {
  const update = { note: "Newer Note", description: "Newer Description", amount: 1033330, createdAt: 77777 };
  wrapper.find("ExpenseForm").prop("onSubmit")(update);
  expect(editExpense).toHaveBeenLastCalledWith("3", update);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle the remove expense action through the use of spies", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
