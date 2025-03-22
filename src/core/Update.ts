import { Model, Action } from './Model';

// Pure and Generic Update function
export const update = <T>(model: Model<T>, action: Action<T>): Model<T> => {
  switch (action.type) {
    case 'setItem':
      return { ...model, item: action.item };

    case 'setItems':
      return { ...model, items: action.items };

    case 'clear':
      return { item: null!, items: [] };

    default:
      // Exhaustive type-check (for future action additions)
      return model;
  }
};
