/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createReceipt = /* GraphQL */ `
  mutation CreateReceipt(
    $input: CreateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    createReceipt(input: $input, condition: $condition) {
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
export const updateReceipt = /* GraphQL */ `
  mutation UpdateReceipt(
    $input: UpdateReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    updateReceipt(input: $input, condition: $condition) {
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
export const deleteReceipt = /* GraphQL */ `
  mutation DeleteReceipt(
    $input: DeleteReceiptInput!
    $condition: ModelReceiptConditionInput
  ) {
    deleteReceipt(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      code
      description
      inventories {
        items {
          id
          productID
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      code
      description
      inventories {
        items {
          id
          productID
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      code
      description
      inventories {
        items {
          id
          productID
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
export const createWareHouse = /* GraphQL */ `
  mutation CreateWareHouse(
    $input: CreateWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    createWareHouse(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateWareHouse = /* GraphQL */ `
  mutation UpdateWareHouse(
    $input: UpdateWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    updateWareHouse(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteWareHouse = /* GraphQL */ `
  mutation DeleteWareHouse(
    $input: DeleteWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    deleteWareHouse(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
      id
      productID
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
      id
      productID
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
      id
      productID
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
