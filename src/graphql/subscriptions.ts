/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateReceipt = /* GraphQL */ `
  subscription OnCreateReceipt {
    onCreateReceipt {
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
export const onUpdateReceipt = /* GraphQL */ `
  subscription OnUpdateReceipt {
    onUpdateReceipt {
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
export const onDeleteReceipt = /* GraphQL */ `
  subscription OnDeleteReceipt {
    onDeleteReceipt {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateWareHouse = /* GraphQL */ `
  subscription OnCreateWareHouse {
    onCreateWareHouse {
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
export const onUpdateWareHouse = /* GraphQL */ `
  subscription OnUpdateWareHouse {
    onUpdateWareHouse {
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
export const onDeleteWareHouse = /* GraphQL */ `
  subscription OnDeleteWareHouse {
    onDeleteWareHouse {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory {
    onCreateInventory {
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
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory {
    onUpdateInventory {
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
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory {
    onDeleteInventory {
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
