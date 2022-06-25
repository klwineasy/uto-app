import React, { useState } from 'react';
import type { NextPage } from 'next';
import {
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
  Stack,
  MenuItem,
  Button,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { NoEncryption, Rowing } from '@mui/icons-material';
import { navRight } from 'aws-amplify';

const handleChange = (event: SelectChangeEvent) => {
  // setDay(event.target.value as string);
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 2,
}));

function createData(
  Sr: number,
  Code: string,
  Description: string,
  Qty: number,
  Packing: string,
  Price: number,
  TotalPrice: number
) {
  return { Sr, Code, Description, Qty, Packing, Price, TotalPrice };
}

const rows = [
  createData(1, 'F-001', 'Frozen yoghurt', 159, 'Pcs', 24, 5),
  createData(2, 'I-001', 'Ice cream sandwich', 237, 'Pcs', 37, 4.3),
  createData(3, 'E-001', 'Eclair', 262, 'Pcs', 24, 6.0),
  createData(4, 'C-001', 'Cupcake', 305, 'Pcs', 67, 4.3),
  createData(5, 'G-001', 'Gingerbread', 356, 'Pcs', 49, 3.9),
];

const Invoice: NextPage = () => {
  return (
    <div className='container' style={{ margin: 5, padding: 5 }}>
      <Typography>
        <h2>New Invoice</h2>
      </Typography>
      <div className='row' style={{ margin: 5, padding: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Customer Name' />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item sx={{ width: 150, border: 1 }}>Invoice No:10000</Item>
              </Grid>
              <Grid item xs={6}>
                <input type='submit' value='Submit' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className='row' style={{ margin: 5, padding: 5 }}>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead style={{ fontStyle: 'bold' }}>
              <TableRow sx={{ border: 2 }}>
                <TableCell>Sr</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align='right'>Qty</TableCell>
                <TableCell align='right'>Packing</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>TotalPrice</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.Sr}</TableCell>
                  <TableCell component='th' scope='row'>
                    {row.Code}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Autocomplete
                      options={top100Films}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </TableCell>
                  <TableCell align='right'>
                    <TextField />
                  </TableCell>
                  <TableCell align='right'>{row.Packing}</TableCell>
                  <TableCell align='right'>{row.Price}</TableCell>
                  <TableCell align='right'>{row.TotalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Grid container spacing={2} style={{ padding: 5 }}>
              <Grid item xs={1}>
                <h5>Cash/Credit:</h5>
              </Grid>
              <Grid item xs={11}>
                <label>
                  <Select onChange={handleChange}>
                    <MenuItem value={5}>Cash</MenuItem>
                    <MenuItem value={10}>Credit</MenuItem>
                  </Select>
                </label>
              </Grid>
              <Grid item xs={1}>
                <h5>Credit Period:</h5>
              </Grid>
              <Grid item xs={11}>
                <label>
                  <Select onChange={handleChange}>
                    <MenuItem value={10}>0</MenuItem>
                    <MenuItem value={10}>7</MenuItem>
                    <MenuItem value={10}>14</MenuItem>
                    <MenuItem value={10}>30</MenuItem>
                    <MenuItem value={10}>45</MenuItem>
                  </Select>
                </label>
              </Grid>
              <Grid item xs={1}>
                <h5>Due Date:</h5>
              </Grid>
              <Grid item xs={11}>
                <h5>14-05-2022</h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid></Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h5>SubTotal:</h5>
                <h5 style={{ textDecorationLine: 'underline' }}>Discount:</h5>
                <h5>Total:</h5>
              </Grid>
              <Grid item xs={6}>
                <h5>125000</h5>
                <h5 style={{ textDecorationLine: 'underline' }}>5%</h5>
                <h5>119000</h5>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h1 align='center'>Thank You For Your Bussiness!</h1>
    </div>
  );
};
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
export default Invoice;
