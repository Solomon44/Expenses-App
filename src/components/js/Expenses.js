import ExpenseItem from './ExpenseItem';
import Card from './Card';
import '../style/Expenses.css';
import ExpenseFilter from '../js/ExpenseFilter';

function ExpensesComp(props) {
  const { items } = props;
  const filterChangeHandler = (selectedData) => {
    console.log(selectedData);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
      </Card>
    </div>
  );
}

export default ExpensesComp;
