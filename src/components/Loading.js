import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(isLoading){
    return (<div> <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading==="true"} 
        >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>)
}