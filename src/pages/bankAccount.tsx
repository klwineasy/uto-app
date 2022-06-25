import * as React from "react";
import { MenuItem, FormHelperText, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectLabels() {
  const [cashInHand, tradeDebtor] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    tradeDebtor(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={cashInHand}
          onChange={handleChange}>
          <MenuItem value={1}>Cash in Hand-Main</MenuItem>
          <MenuItem value={2}>Cash in Hand-YGN Medical</MenuItem>
          <MenuItem value={3}>Cash in Hand-MDY Medical</MenuItem>
          <MenuItem value={4}>Cash in Hand-YGN Tools</MenuItem>
          <MenuItem value={5}>Cash in Hand-MDY Tools</MenuItem>
          <MenuItem value={6}>Cash in Hand-PMN Tools</MenuItem>
          <MenuItem value={7}>Cash in Hand-SINOMM</MenuItem>
        </Select>
        <FormHelperText>Cash In Hand</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={cashInHand}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          <MenuItem value={1}>Cash in Hand-Main</MenuItem>
          <MenuItem value={2}>Trade Debtor-YGN Medical</MenuItem>
          <MenuItem value={3}>Trade Debtor-MDY Medical</MenuItem>
          <MenuItem value={4}>Trade Debtor-YGN Power Tools</MenuItem>
          <MenuItem value={5}>Trade Debtor-MDY Power Tools</MenuItem>
          <MenuItem value={6}>Trade Debtor-PMN Power Tools</MenuItem>
          <MenuItem value={7}>Trade Debtor-Sinomm</MenuItem>
        </Select>
        <FormHelperText>Trade Debtor</FormHelperText>
      </FormControl>
    </div>
  );
}
