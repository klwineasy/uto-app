// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, Receipt, Customer, Employee, Product, Inventory, Location, WareHouse } = initSchema(schema);

export {
  Order,
  Receipt,
  Customer,
  Employee,
  Product,
  Inventory,
  Location,
  WareHouse
};