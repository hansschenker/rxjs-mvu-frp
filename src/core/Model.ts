// src/core/Model.ts

// Application State (Model)
export type Model<T> = {
    item: T;
    items: T[];
  };
  
  
  export type Action<T> =
  | { type: 'setItem'; item: T }
  | { type: 'setItems'; items: T[] }
  | { type: 'clear' };

export const update = <T>(model: Model<T>, msg: Action<T>): Model<T> => {
  switch (msg.type) {
    case 'setItem':
      return { ...model, item: msg.item };
    case 'setItems':
      return { ...model, items: msg.items };
    case 'clear':
      return { ...model, item: null!, items: [] };
    default:
      return model;
  }
};

  


    