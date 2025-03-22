import { BehaviorSubject, Observable } from 'rxjs';
import { scan, distinctUntilChanged, map } from 'rxjs/operators';
import { Model, Action } from '../core/Model';
import { update } from '../core/Update';

export type Store<T> = {
  // Dispatch actions
  dispatch: (action: Action<T>) => void;
  
  // Select entire model
  select: () => Observable<Model<T>>;
  
  // Convenience selectors
  selectItem: () => Observable<T>;
  selectItems: () => Observable<T[]>;
  selectById: (id: string | number) => Observable<T | undefined>;
  selectByFilter: (filter: Partial<T>) => Observable<T[]>;
};

export const createStore = <T extends { id: string | number }>(initialModel: Model<T>): Store<T> => {
  const action$ = new BehaviorSubject<Action<T>>({ type: 'clear' });

  const model$: Observable<Model<T>> = action$.pipe(
    scan((model, action) => {
      console.log('Action received:', action);
      const newModel = update(model, action);
      console.log('New model:', newModel);
      return newModel;
    }, initialModel),
    distinctUntilChanged()
  );

  // Enhanced selectors
  const selectItem = () => model$.pipe(map(model => model.item));
  const selectItems = () => model$.pipe(map(model => model.items));
  const selectById = (id: string | number) => selectItems().pipe(
    map(items => items.find(item => item.id === id))
  );
  const selectByFilter = (filter: Partial<T>) => selectItems().pipe(
    map(items => items.filter(item => 
      Object.entries(filter).every(([key, value]) => item[key as keyof T] === value)
    ))
  );

  const dispatch = (action: Action<T>) => action$.next(action);
  const select = () => model$;

  // Debug subscription
  model$.subscribe(model => {
    console.log('Model updated:', model);
  });

  return { 
    dispatch, 
    select,
    selectItem,
    selectItems,
    selectById,
    selectByFilter
  };
};

// Example of error handling around JSON.parse
try {
  const jsonString = '{"id":1,"name":"Alice"}'; // Example JSON string
  const parsedObject = JSON.parse(jsonString);
  console.log(parsedObject);
} catch (error) {
  console.error('Failed to parse JSON:', error);
}
