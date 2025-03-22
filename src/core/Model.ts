// src/core/Model.ts

// Application State (Model)
export type Model<T> = {
    item: T;
    items: T[];
  };
  
  /**
   * Action type to support CRUD operations plus list functionality.
   * 
   * This type represents all possible actions that can be performed on the model.
   * It includes create, read, update, delete operations as well as listing and clearing data.
   */
  export type Action<T> =
  // Create operations
  | { type: 'create'; item: T }
  | { type: 'createMany'; items: T[] }
  
  // Read operations
  | { type: 'read'; id: string | number }
  | { type: 'list'; filter?: Partial<T> }
  
  // Update operations
  | { type: 'update'; id: string | number; changes: Partial<T> }
  | { type: 'updateMany'; items: Array<{ id: string | number; changes: Partial<T> }> }
  
  // Delete operations
  | { type: 'delete'; id: string | number }
  | { type: 'deleteMany'; ids: Array<string | number> }
  
  // Clear all data
  | { type: 'clear' };

// export const update = <T>(model: Model<T>, msg: Action<T>): Model<T> => {
//   switch (msg.type) {
//     case 'setItem':
//       return { ...model, item: msg.item };
//     case 'setItems':
//       return { ...model, items: msg.items };
//     case 'clear':
//       return { ...model, item: null!, items: [] };
//     default:
//       return model;
//   }
// };

  


    