const expensesReducer = (accumulator, current) => accumulator + current.amount;

export default (expenseBag) => {
  if (expenseBag?.length > 0) {
    return expenseBag.reduce(expensesReducer, 0);
  }
  return 0;
};
