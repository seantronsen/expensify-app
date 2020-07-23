import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render the ExpenseForm component correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm component with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New Description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on text area change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New Note";
  wrapper.find("textarea").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if the input is valid (test data will be valid)", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "23.50";
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("should set amount if the input is valid (test data will be invalid)", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "12.122";
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper
    .find("form")
    .at(0)
    .simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
  });
});

// test onDateChange

test("should set a new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar focused via the onFocusChanged ", () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocused")).toBe(focused);
});
