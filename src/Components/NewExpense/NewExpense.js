import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const addExpenseHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    //if you are not editing anything in form then just button willl be displayed otherwise
    //WHen button is clicked it will lead you to the expense Form.
    <div className='new-expense'>
      {!isEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
