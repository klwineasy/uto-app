import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReceiptMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InventoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WareHouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly receipt?: Receipt | null;
  readonly product?: Product | null;
  readonly quantity: number;
  readonly inventoryID: string;
  readonly inventory?: Inventory | null;
  readonly pricePerUnit: number;
  readonly totalPrice: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Receipt {
  readonly id: string;
  readonly status: string;
  readonly date: string;
  readonly orders?: (Order | null)[] | null;
  readonly customer?: Customer | null;
  readonly subTotal: number;
  readonly discount: number;
  readonly total: number;
  readonly credit: boolean;
  readonly creditDue: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Receipt, ReceiptMetaData>);
  static copyOf(source: Receipt, mutator: (draft: MutableModel<Receipt, ReceiptMetaData>) => MutableModel<Receipt, ReceiptMetaData> | void): Receipt;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly receipts?: (Receipt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Employee {
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}

export declare class Product {
  readonly id: string;
  readonly code: string;
  readonly description: string;
  readonly inventories?: (Inventory | null)[] | null;
  readonly unit: string;
  readonly packing: string;
  readonly salePrice: number;
  readonly orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Inventory {
  readonly id: string;
  readonly product?: Product | null;
  readonly location?: Location | null;
  readonly quantity: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Inventory, InventoryMetaData>);
  static copyOf(source: Inventory, mutator: (draft: MutableModel<Inventory, InventoryMetaData>) => MutableModel<Inventory, InventoryMetaData> | void): Inventory;
}

export declare class Location {
  readonly id: string;
  readonly name: string;
  readonly wareHouse?: WareHouse | null;
  readonly inventories?: (Inventory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class WareHouse {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly locations?: (Location | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WareHouse, WareHouseMetaData>);
  static copyOf(source: WareHouse, mutator: (draft: MutableModel<WareHouse, WareHouseMetaData>) => MutableModel<WareHouse, WareHouseMetaData> | void): WareHouse;
}