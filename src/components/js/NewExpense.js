import '../style/NewExpense.css';

import ExpenseForm from './ExpenseForm';
function FormItem(props) {
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      id: 'e' + Math.floor(Math.random() * 100).toString(),
      ...enteredExpenseData,
    };
    props.newExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default FormItem;
