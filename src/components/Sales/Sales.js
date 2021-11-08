import create from "../../assets/createNew.svg";
import './Sales.css';
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

function createData(name, store, address, category, date, price, items, volume, sale) {
  return { name, store, address, category, date, price, items, volume, sale };
}

const rows = [
  createData(),
  createData('Vse', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('V', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Sportivkax', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Abibas', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('i', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('na', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Nikax', 'NIKES', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Pasani', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Cupcake', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Gingerbread', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),
  createData('Frozen yoghurt', 'ABIBAS', 'asdadasdasdasdasdas', 'sport', 4.0, 123, 40, 50+'kg', 100),

];

export const Sales = (props) => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='namedMain'>
          <span className='textFirst'><p>My sales</p></span>
          <span className='textTwo'>Sales table</span>
        </div>
        <div className='mainCreate'>
          <button className='button' onClick={() => props.setModal({ modalSales:true})}>
            <img src={create} /><span className='buttonText'>Create a product</span>
          </button>
        </div>
      </div>

      <div className='contentSales'>
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
                <StyledTableCell align="center">Sold items&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Weight / Volume&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Last sale&nbsp;</StyledTableCell>
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
                  <StyledTableCell align="center">{row.items}</StyledTableCell>
                  <StyledTableCell align="center">{row.volume}</StyledTableCell>
                  <StyledTableCell align="center">{row.sale}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </React.Fragment>
  );
}
