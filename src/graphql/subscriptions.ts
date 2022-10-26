/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      receiptID
      receipt {
        id
        status
        date
        customerID
        orders {
          nextToken
          startedAt
        }
        customer {
          id
          name
          phoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        subTotal
        discount
        total
        credit
        creditDue
        salesRepID
        salesRep {
          id
          name
          startDate
          phoneNumber
          email
          jobTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      inventoryID
      inventory {
        id
        productID
        wareHouseID
        locationID
        product {
          id
          code
          description
          unit
          packing
          salePrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        warehouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        location {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pricePerUnit
      totalPrice
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      receiptID
      receipt {
        id
        status
        date
        customerID
        orders {
          nextToken
          startedAt
        }
        customer {
          id
          name
          phoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        subTotal
        discount
        total
        credit
        creditDue
        salesRepID
        salesRep {
          id
          name
          startDate
          phoneNumber
          email
          jobTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      inventoryID
      inventory {
        id
        productID
        wareHouseID
        locationID
        product {
          id
          code
          description
          unit
          packing
          salePrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        warehouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        location {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pricePerUnit
      totalPrice
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      receiptID
      receipt {
        id
        status
        date
        customerID
        orders {
          nextToken
          startedAt
        }
        customer {
          id
          name
          phoneNumber
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        subTotal
        discount
        total
        credit
        creditDue
        salesRepID
        salesRep {
          id
          name
          startDate
          phoneNumber
          email
          jobTitle
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      productID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      inventoryID
      inventory {
        id
        productID
        wareHouseID
        locationID
        product {
          id
          code
          description
          unit
          packing
          salePrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        warehouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        location {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pricePerUnit
      totalPrice
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateReceipt = /* GraphQL */ `
  subscription OnCreateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onCreateReceipt(filter: $filter) {
      id
      status
      date
      customerID
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      customer {
        id
        name
        phoneNumber
        receipts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subTotal
      discount
      total
      credit
      creditDue
      salesRepID
      salesRep {
        id
        name
        startDate
        phoneNumber
        email
        jobTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateReceipt = /* GraphQL */ `
  subscription OnUpdateReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onUpdateReceipt(filter: $filter) {
      id
      status
      date
      customerID
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      customer {
        id
        name
        phoneNumber
        receipts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subTotal
      discount
      total
      credit
      creditDue
      salesRepID
      salesRep {
        id
        name
        startDate
        phoneNumber
        email
        jobTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteReceipt = /* GraphQL */ `
  subscription OnDeleteReceipt($filter: ModelSubscriptionReceiptFilterInput) {
    onDeleteReceipt(filter: $filter) {
      id
      status
      date
      customerID
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      customer {
        id
        name
        phoneNumber
        receipts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subTotal
      discount
      total
      credit
      creditDue
      salesRepID
      salesRep {
        id
        name
        startDate
        phoneNumber
        email
        jobTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      name
      startDate
      phoneNumber
      email
      jobTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      name
      startDate
      phoneNumber
      email
      jobTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      name
      startDate
      phoneNumber
      email
      jobTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
      id
      name
      phoneNumber
      receipts {
        items {
          id
          status
          date
          customerID
          subTotal
          discount
          total
          credit
          creditDue
          salesRepID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
      id
      name
      phoneNumber
      receipts {
        items {
          id
          status
          date
          customerID
          subTotal
          discount
          total
          credit
          creditDue
          salesRepID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
      id
      name
      phoneNumber
      receipts {
        items {
          id
          status
          date
          customerID
          subTotal
          discount
          total
          credit
          creditDue
          salesRepID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      code
      description
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unit
      packing
      salePrice
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      code
      description
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unit
      packing
      salePrice
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      code
      description
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      unit
      packing
      salePrice
      orders {
        items {
          id
          receiptID
          productID
          quantity
          inventoryID
          pricePerUnit
          totalPrice
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWareHouse = /* GraphQL */ `
  subscription OnCreateWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onCreateWareHouse(filter: $filter) {
      id
      name
      address
      locations {
        items {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWareHouse = /* GraphQL */ `
  subscription OnUpdateWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onUpdateWareHouse(filter: $filter) {
      id
      name
      address
      locations {
        items {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWareHouse = /* GraphQL */ `
  subscription OnDeleteWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onDeleteWareHouse(filter: $filter) {
      id
      name
      address
      locations {
        items {
          id
          name
          wareHouseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
      id
      name
      wareHouseID
      wareHouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
      id
      name
      wareHouseID
      wareHouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
      id
      name
      wareHouseID
      wareHouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      inventories {
        items {
          id
          productID
          wareHouseID
          locationID
          quantity
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
      id
      productID
      wareHouseID
      locationID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      location {
        id
        name
        wareHouseID
        wareHouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
      id
      productID
      wareHouseID
      locationID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      location {
        id
        name
        wareHouseID
        wareHouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
      id
      productID
      wareHouseID
      locationID
      product {
        id
        code
        description
        inventories {
          nextToken
          startedAt
        }
        unit
        packing
        salePrice
        orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      warehouse {
        id
        name
        address
        locations {
          nextToken
          startedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      location {
        id
        name
        wareHouseID
        wareHouse {
          id
          name
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        inventories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
