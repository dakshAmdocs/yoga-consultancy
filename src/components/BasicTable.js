import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicTable() {


function createData(id, name, age, email) {
  return { id, name, age, email };
}

var currId = 3;
var rows = [{id: 1, name: "Rahul", age: 27, email: "rahul321@gmail.com"}, createData(2, "Aayush", 25, "aayush2255@gmail.com")];  
//   useEffect(() => {
//     rows.push(createData(currId, "Rahul", 27, "rahul321@gmail.com"))
//     currId++;
// }, [])

  return (
    <div>
      <div>Yoga Consultation Portal</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">AGE</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
              <Stack spacing={1} direction="row">
                <Button variant="outlined"  size="small" >View</Button>
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="contained" size="small" color="error">Delete</Button>
              </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}