import React from 'react';
import '../style/ExpenseFilter.css';
const ExpenseFilter = function (props) {
  const expeseFilterHandler = (element) => {
    props.onChangeFilter(element.target.value);
  };
  return (
    <div className='expense-filter'>
      <div className='expense-filter__control'>
        <label className='expense-filter__title'>Choose your year</label>
        <select onClick={expeseFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
