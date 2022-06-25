import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TrapFocus from "@mui/base/TrapFocus";

function createData(
  invoice: string,
  date: string,
  code: string,
  qty: number,
  finalTotalPrice: number,
  description: string
) {
  return { invoice, date, code, qty, finalTotalPrice, description };
}

const rows = [
  createData(
    "ygntools-111668",
    "19-05-22",
    "8858833000696",
    2,
    2600,
    "5Z-TT06 Cable Tie White Sumo"
  ),

  createData(
    "ygntools-111668",
    "19-05-22",
    "8858833000696",
    2,
    2600,
    "5Z-TT06 Cable Tie White Sumo"
  ),

  createData(
    "ygntools-111668",
    "19-05-22",
    "8858833000696",
    2,
    2600,
    "5Z-TT06 Cable Tie White Sumo"
  ),

  createData(
    "ygntools-111668",
    "19-05-22",
    "8858833000696",
    2,
    2600,
    "5Z-TT06 Cable Tie White Sumo"
  ),
];

export default function BasicTrapFocus() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <button type="button" onClick={() => setOpen(true)}>
        Sales Invoice
      </button>
      {open && (
        <TrapFocus open>
          <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice</TableCell>
                    <TableCell align="right">date</TableCell>
                    <TableCell align="right">code</TableCell>
                    <TableCell align="right">qty</TableCell>
                    <TableCell align="right">
                      finalTotalPrice&nbsp;(k)
                    </TableCell>
                    <TableCell align="right">description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.invoice}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell component="th" scope="row">
                        {row.invoice}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.code}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.finalTotalPrice}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </Box>
        </TrapFocus>
      )}
    </Box>
  );
}
