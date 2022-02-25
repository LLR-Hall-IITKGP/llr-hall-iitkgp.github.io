import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from "../datapresidents.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

// function createData(name, calories) {
//   return { name, calories };
// }



// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Ice cream sandwich', 237),
//   createData('Eclair', 262),
//   createData('Cupcake', 305),
//   createData('Gingerbread', 356),
//   createData('Gingerbread', 356),
//   createData('Gingerbread', 356),
//   createData('Gingerbread', 356),
//   createData('Gingerbread', 356),
//   createData('Eclair', 262),
//   createData('Eclair', 262),
//   createData('Eclair', 262),
//   createData('Eclair', 262),
//   createData('Frozen yoghurt', 159),
//   createData('Frozen yoghurt', 159)
// ];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
    <div className="head">
        <h2 className="text">Hall of Fame</h2>              
    </div>

    {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

      </FormControl> */}

      <Table style={{width:"70%",margin:"32px auto 32px"}}aria-label="customized table">

        <TableHead >
          <TableRow>
            <StyledTableCell align="center" style ={{backgroundColor:"#7620ff"}}>Year</StyledTableCell>
            <StyledTableCell align="center" style ={{backgroundColor:"#7620ff"}}>Hall President</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((president) => (
            <StyledTableRow >
              <StyledTableCell align="center" component="th" scope="row">
                {president.name}
              </StyledTableCell>
              <StyledTableCell align="center">{president.year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}



// export default function HallOfFame(){
//     return(
//         <div>
//             <div className="box">
//                 <div className="head">
//                     <h2 className="text">Hall of Fame</h2>
//                  </div>
//             </div>
//         </div>
//     )
// }