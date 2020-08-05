import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

// Refactor the EditExpensePage to be a class based component
// Setup the map dispatch to props function

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});
const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
