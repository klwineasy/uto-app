import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

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

type WareHouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerOrder = {
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
}

type LazyOrder = {
  readonly id: string;
  readonly receipt: AsyncItem<Receipt | undefined>;
  readonly product: AsyncItem<Product | undefined>;
  readonly quantity: number;
  readonly inventoryID: string;
  readonly inventory: AsyncItem<Inventory | undefined>;
  readonly pricePerUnit: number;
  readonly totalPrice: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order, OrderMetaData>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

type EagerReceipt = {
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
  readonly salesRepID: string;
  readonly salesRep: Employee;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReceipt = {
  readonly id: string;
  readonly status: string;
  readonly date: string;
  readonly orders: AsyncCollection<Order>;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly subTotal: number;
  readonly discount: number;
  readonly total: number;
  readonly credit: boolean;
  readonly creditDue: number;
  readonly salesRepID: string;
  readonly salesRep: AsyncItem<Employee>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Receipt = LazyLoading extends LazyLoadingDisabled ? EagerReceipt : LazyReceipt

export declare const Receipt: (new (init: ModelInit<Receipt, ReceiptMetaData>) => Receipt) & {
  copyOf(source: Receipt, mutator: (draft: MutableModel<Receipt, ReceiptMetaData>) => MutableModel<Receipt, ReceiptMetaData> | void): Receipt;
}

type EagerCustomer = {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly receipts?: (Receipt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly receipts: AsyncCollection<Receipt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer, CustomerMetaData>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

type EagerEmployee = {
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}

type EagerProduct = {
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
}

type LazyProduct = {
  readonly id: string;
  readonly code: string;
  readonly description: string;
  readonly inventories: AsyncCollection<Inventory>;
  readonly unit: string;
  readonly packing: string;
  readonly salePrice: number;
  readonly orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerInventory = {
  readonly id: string;
  readonly product?: Product | null;
  readonly warehouse?: WareHouse | null;
  readonly location?: Location | null;
  readonly quantity: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventory = {
  readonly id: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly warehouse: AsyncItem<WareHouse | undefined>;
  readonly location: AsyncItem<Location | undefined>;
  readonly quantity: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inventory = LazyLoading extends LazyLoadingDisabled ? EagerInventory : LazyInventory

export declare const Inventory: (new (init: ModelInit<Inventory, InventoryMetaData>) => Inventory) & {
  copyOf(source: Inventory, mutator: (draft: MutableModel<Inventory, InventoryMetaData>) => MutableModel<Inventory, InventoryMetaData> | void): Inventory;
}

type EagerWareHouse = {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly locations?: (Location | null)[] | null;
  readonly inventories?: (Inventory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWareHouse = {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly locations: AsyncCollection<Location>;
  readonly inventories: AsyncCollection<Inventory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WareHouse = LazyLoading extends LazyLoadingDisabled ? EagerWareHouse : LazyWareHouse

export declare const WareHouse: (new (init: ModelInit<WareHouse, WareHouseMetaData>) => WareHouse) & {
  copyOf(source: WareHouse, mutator: (draft: MutableModel<WareHouse, WareHouseMetaData>) => MutableModel<WareHouse, WareHouseMetaData> | void): WareHouse;
}

type EagerLocation = {
  readonly id: string;
  readonly name: string;
  readonly wareHouse?: WareHouse | null;
  readonly inventories?: (Inventory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly id: string;
  readonly name: string;
  readonly wareHouse: AsyncItem<WareHouse | undefined>;
  readonly inventories: AsyncCollection<Inventory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location, LocationMetaData>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}