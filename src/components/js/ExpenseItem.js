import React, { useState } from 'react';
import '../style/ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card';
function ExpenseItem(props) {
  // const options = { year: 'long', month: 'long', day: '2-digit' };

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Update');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <div className='expense-item__date'>
        <ExpenseDate date={props.date} />
      </div>

      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
      <button onClick={clickHandler}>Change tilte</button>
    </Card>
  );
}
export default ExpenseItem;
