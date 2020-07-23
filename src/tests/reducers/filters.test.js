import moment from "moment";

import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const action = {
    type: "SORT_BY_DATE",
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

// should set text filter
test("should set text filter to a specified value", () => {
  const text = "this is my test filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// should set start date filter
test("should set start date filter to a specified moment instance", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

// should set the end date filter
test("should set end date filter to a specified moment instance", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
