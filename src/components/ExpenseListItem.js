import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'

//Export a stateless functional component
// description, amount, created at value

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  dispatch,
  ...rest
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {numeral(amount).format('$0,0.00')}
       - 
       {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
