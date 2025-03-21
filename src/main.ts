import { createStore } from './store/Store';
import { Model } from './core/Model';

type User = { id: number; name: string };

// Define initial state clearly
const initialUserModel: Model<User> = {
  item: { id: 0, name: 'Unknown' },
  items: [],
};

// Create functional ReactiveStore
const userStore = createStore<User>(initialUserModel);

// Subscribe reactively to state changes
userStore.select().subscribe(model => {
  console.log('Reactive Functional Store:', model);
});

// Dispatch actions clearly
userStore.dispatch({ type: 'setItem', item: { id: 1, name: 'Alice' } });
userStore.dispatch({ type: 'setItems', items: [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }] });
userStore.dispatch({ type: 'clear' });
