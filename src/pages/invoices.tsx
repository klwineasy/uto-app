import React, { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Autocomplete,
  TextField,
} from '@mui/material';
import { NoEncryption } from '@mui/icons-material';

const discount = 0.05;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, price: number, wholeSale: number) {
  return qty * price;
}

function createRow(
  desc: string,
  qty: number,
  price: number,
  wholeSale: number
) {
  const totalPrice = priceRow(qty, price, wholeSale);
  return { desc, qty, price, wholeSale, totalPrice };
}

interface Row {
  desc: string;
  qty: number;
  price: number;
  wholeSale: number;
  totalPrice: number;
}

function subtotal(items: readonly Row[]) {
  return items
    .map(({ totalPrice }) => totalPrice)
    .reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 1, 1, 1.15),
  createRow('Paper (Case)', 2, 1.5, 45.99),
  createRow('Waste Basket', 3, 2.0, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceDiscount = discount * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal - invoiceDiscount;

const Invoices: NextPage = () => {
  return (
    <div style={{ width: '100%', padding: 3, margin: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={3}>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={customerName}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label='Customer Name' />
                  )}
                />
              </TableCell>
              <TableCell align='right'>
                <h5>Date</h5>
                <h5>Invoice</h5>
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: 2, textcolor: 'red' }}>
              <TableCell>Description</TableCell>
              <TableCell align='right'>Qty</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>WholeSale</TableCell>
              <TableCell align='right'>TotalPrice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ width: 100 }}>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>
                  <input type='text' />
                </TableCell>
                <TableCell align='right'>
                  <input
                    type='text'
                    style={{ border: 0, textAlign: 'right' }}
                  />
                </TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>
                  <input
                    type='text'
                    style={{ border: 0, textAlign: 'right' }}
                  />
                </TableCell>
                <TableCell align='right'>{ccyFormat(row.totalPrice)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Discount</TableCell>
              <TableCell align='right'>{`${(discount * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceDiscount)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const customerName = [
  { label: 'General Customer' },
  { label: 'YGN- Aung Brother' },
  { label: 'MDY- Thit Sar' },
];

export default Invoices;
//
// import * as React from 'react';

// const App = () => {
//   const options = [
//     { label: 'Fruit', value: 'fruit' },
//     { label: 'Vegetable', value: 'vegetable' },
//     { label: 'Meat', value: 'meat' },
//   ];

//   const [value, setValue] = React.useState('fruit');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         What do we eat?
//         <select value={value} onChange={handleChange}>
//           {options.map((option) => (
//             <option value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       </label>

//       <p>We eat {value}!</p>
//     </div>
//   );
// };

// export default App;
