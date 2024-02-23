import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { store } from '../../Data';
import Loader from '../loader/Loader';

export default function Resident() {
    const{residentApi} = React.useContext(store)
    if(Object.keys(residentApi).length ==0){
        return <Loader></Loader>
    }
  return (
    <div className='resident'>
        <Card sx={{ maxWidth: 345 }}>
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {residentApi.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hights:{residentApi.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mass:{residentApi.mass}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender:{residentApi.gender}
          </Typography>
        </CardContent>
      
      
    </Card>
    </div>
  );
}