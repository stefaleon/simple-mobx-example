import { observer } from 'mobx-react';
import counterStore from '../store/counterStrore';

const Counter = observer(() => {
  return (
    <div>
      <h2>Counter: {counterStore.counter.get()}</h2>
      <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button>
    </div>
  );
});

export default Counter;
