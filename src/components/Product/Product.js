import create from "../../assets/createNew.svg";
import './Product.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, store, address, category, date, price, remains, volume, actions) {
  return { name, store, address, category, date, price, remains, volume, actions };
}

const rows = [
  createData(),
  createData('Frozen yoghurt', 159, "asdadasdasdasdasdas", 24, 4.0, 159, "asdadasdasdasdasdas", 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0, 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, "asdadasdasdasdasdas", 24, 4.0, 159, "asdadasdasdasdasdas", 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0,262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3,305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9,356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, "asdadasdasdasdasdas", 24, 4.0,159, "asdadasdasdasdasdas", 24, 4.0),

];

function Products(props) {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='namedMain'>
          <span className='textFirst'><p>My product</p></span>
          <span className='textTwo'>Product table</span>
        </div>
        <div className='mainCreate'>
          <button className='button' onClick={() => props.setModal({ modalProduct:true})}>
            <img src={create} /><span className='buttonText'>Create a product</span>
          </button>
        </div>
      </div>

      <div className='contentProduct'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow className='tableHeadBackground'>
                <StyledTableCell>Product name</StyledTableCell>
                <StyledTableCell align="center">Store</StyledTableCell>
                <StyledTableCell align="center">Addres&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Category&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Creation date&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Price&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Remains&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Weight / Volume&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Actions&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.store}</StyledTableCell>
                  <StyledTableCell align="center">{row.address}</StyledTableCell>
                  <StyledTableCell align="center">{row.category}</StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                  <StyledTableCell align="center">{row.remains}</StyledTableCell>
                  <StyledTableCell align="center">{row.volume}</StyledTableCell>
                  <StyledTableCell align="center">{row.actions}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </React.Fragment>
  );
}

export default Products;