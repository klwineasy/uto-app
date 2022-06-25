export * from './AmplifyContext';
export * from './ProductContext';
export * from './EmployeeContext';
export * from './WareHouseContext';
export * from './LocationContext';
export * from './InventoryContext';

export enum EntityState {
  LOADING,
  ERROR,
  NOT_FOUND,
  VALID,
}

export interface EntityResult<T> {
  state: EntityState;
  value?: T;
  error?: any;
}
