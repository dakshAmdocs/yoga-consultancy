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
import Loading from './Loading';
import './BasicTable.css';
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users"

export default function BasicTable() {

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    axios.get(BASE_URL + "/getAllUsers").then(
      (response)=>{
        console.log(response)
        setRows(response.data)
        setIsLoading(false);
      }
    )
  }, [])

  if(isLoading){
    return <Loading isLoading = {isLoading}/>
  }

  return (
    <Stack spacing={2} padding={2}>
      <div className='heading'><b>Yoga Consultation Portal</b></div>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
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
              key={row.user_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.user_id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
              <Stack spacing={1} direction="row" justifyContent="center">
                <Button variant="outlined"  size="small">View</Button>
                <Button variant="contained" size="small">Edit</Button>
                <Button variant="contained" size="small" color="error">Delete</Button>
              </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
  );
}