import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BASE_URL = "http://localhost:8080/api/users"

export default function EditUser(id){

    const [user, setUser] = React.useState();
    axios.get(BASE_URL + "/getByID/" + id).then(
        response => { setUser(response.data)}
    )

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required defaultValue={user.name} id="name" label="Name" variant="outlined" />
          <TextField required defaultValue={user.age} type='number' id="age" label="Age" variant="outlined" />
          <TextField required defaultValue={user.email} id="email" label="Email" variant="outlined" />
          <Button type='submit' variant="contained" size="small">Submit</Button>
        </Box>
    );
}