/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        receiptID
        receipt {
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
        productID
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
        quantity
        inventoryID
        inventory {
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
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        receiptID
        receipt {
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
        productID
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
        quantity
        inventoryID
        inventory {
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
  }
`;
export const getReceipt = /* GraphQL */ `
  query GetReceipt($id: ID!) {
    getReceipt(id: $id) {
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
export const listReceipts = /* GraphQL */ `
  query ListReceipts(
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceipts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncReceipts = /* GraphQL */ `
  query SyncReceipts(
    $filter: ModelReceiptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReceipts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWareHouse = /* GraphQL */ `
  query GetWareHouse($id: ID!) {
    getWareHouse(id: $id) {
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
export const listWareHouses = /* GraphQL */ `
  query ListWareHouses(
    $filter: ModelWareHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWareHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWareHouses = /* GraphQL */ `
  query SyncWareHouses(
    $filter: ModelWareHouseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWareHouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
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
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncInventories = /* GraphQL */ `
  query SyncInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
