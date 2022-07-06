export * from './amplify';
export * from './product';
export * from './employee';
export * from './warehouse';
export * from './location';
export * from './inventory';

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
