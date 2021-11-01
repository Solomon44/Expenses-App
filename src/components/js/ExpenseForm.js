import '../style/ExpenseForm.css';
import React, { useState } from 'react';
const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleEnteredHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountEnteredHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateEnteredHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    console.log(formData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={titleEnteredHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name='amount'
            value={amount}
            onChange={amountEnteredHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            min='2010-09-01'
            max='2022-09-01'
            name='date'
            value={date}
            onChange={dateEnteredHandler}
          />
        </div>
        <div className='new-expense__actions '>
          <button type='submit'>add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
