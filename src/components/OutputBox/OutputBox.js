import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useEffect} from 'react';
import {useState} from 'react';

export default function OutputBox() {
  const [pseudoCode, setPseudoCode] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/ans').then(res => res.json()).then(data => {
      setPseudoCode(data);
    });
  }, []);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Paper variant="outlined">
            <Typography align="left" variant='inherit'>
              {pseudoCode}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
