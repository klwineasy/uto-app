import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  TableRow,
  Paper,
  AppBar,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import { Navbar } from "../components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

function createData(
  name: string,
  description: string,
  sale: number,
  cost: number,
  unit: string,
  packing: string
) {
  return {
    name,
    description,
    sale,
    cost,
    unit,
    packing,
    history: [
      {
        date: "05-06-20",
        cosignment: "ygnopen-2",
        Qty: "50",
        location: "TGN",
        totalCost: "260,522.82",
      },
      {
        date: "05-06-20",
        cosignment: "ygnopen-2",
        Qty: "50",
        location: "TGN",
        totalCost: "260,522.82",
      },
      {
        date: "05-06-20",
        cosignment: "ygnopen-2",
        Qty: "50",
        location: "TGN",
        totalCost: "260,522.82",
      },
    ],
  };
}

function Row(props: any) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="left">{row.sale}</TableCell>
        <TableCell align="left">{row.cost}</TableCell>
        <TableCell align="left">{row.unit}</TableCell>
        <TableCell align="left">{row.packing}</TableCell>
        <TableCell>
          {" "}
          <Checkbox {...label} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginLeft: 15 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Date</TableCell>
                    <TableCell>Cosignment</TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Total Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>
                        {" "}
                        <Checkbox {...label} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.cosignment}</TableCell>
                      <TableCell align="right">{historyRow.location}</TableCell>
                      <TableCell align="right">{historyRow.Qty}</TableCell>
                      <TableCell align="right">
                        {historyRow.totalCost}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "10-CHEO",
    "Chemical Rotary Hand Pump ( SUZUKI )",
    72400.0,
    47015.0,
    "Pair",
    "1/box"
  ),
  createData(
    "10-GHPO",
    "Chemical Glass Tube Rotary Pump Hand Pump ( SUZUKI )",
    72400.0,
    47015.0,
    "Pair",
    "1/box"
  ),
  createData(
    "10-RP32",
    "Hand Rotary High Flow Pump RP-32 ( CASH JING)",
    72400.0,
    47015.0,
    "Pair",
    "1/box"
  ),
  createData(
    "10-RP33",
    "Gear repair Kit (Spare parts for RP-32H)",
    72400.0,
    47015.0,
    "Pair",
    "1/box"
  ),
  createData(
    "10-UHPO",
    "Hand Rotary Pump ( UTO )",
    72400.0,
    47015.0,
    "Pair",
    "1/box"
  ),
];

const items = () => {
  return (
    <Box>
      <Navbar />
      {/* <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello World!
        </Typography>
      </Box> */}

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow style={{ background: "aliceblue" }}>
              <TableCell />
              <TableCell
                className="tCell"
                style={{ fontWeight: "bold", fontSize: "18px" }}>
                Code
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Description
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Sale Price
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Cost
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Unit
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Packing
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "18px" }}
                align="left">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Stack
        direction="row"
        style={{
          justifyContent: "right",
          display: "flex",
          paddingRight: "40px",
        }}>
        <Pagination
          count={8}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              variant="outlined"
            />
          )}
        />
      </Stack>
    </Box>
  );
};

export default items;
