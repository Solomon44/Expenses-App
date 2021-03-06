import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ChartExpenses from './ChartExpenses';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    filter => filter.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ChartExpenses expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
