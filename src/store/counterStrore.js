import { observable, action } from 'mobx';

class CounterStore {
  counter = observable.box(0);

  increment = action(() => {
    this.counter.set(this.counter.get() + 1);
  });

  decrement = action(() => {
    this.counter.set(this.counter.get() - 1);
  });
}

const counterStore = new CounterStore();
export default counterStore;
