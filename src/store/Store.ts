

import { BehaviorSubject, Observable } from 'rxjs';
import { scan, distinctUntilChanged } from 'rxjs/operators';
import { Model, Action, update } from '../core/Model';




export type Store<T> = {
    dispatch: (msg: Action<T>) => void;
    select: () => Observable<Model<T>>;
  };

export const createStore = <T>(initialModel: Model<T>): Store<T> => {
  const action$ = new BehaviorSubject<Action<T>>({ type: 'clear' });

  const model$: Observable<Model<T>> = action$.pipe(
    scan(update, initialModel),
    distinctUntilChanged()
  );

  const dispatch = (msg: Action<T>) => action$.next(msg);
  const select = () => model$;

  return { dispatch, select };
};
