import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e' + Math.trunc(Math.random()),
    };
    props.onAddExpense(expenseData);
  };
  const btnCancelHandler = () => {
    setIsEditing(false);
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={btnCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
