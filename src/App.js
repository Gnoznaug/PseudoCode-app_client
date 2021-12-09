import './App.css';
import { TextField } from '@mui/material';
import ValidationTextFields from './components/ValidationTextFields/ValidationTextFields';
import OutputBox from './components/OutputBox/OutputBox';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { submitLeetcodeLink } from './services'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Paper elevation={0}>PseudoCode App</Paper>
          </Grid>
          <Grid item xs spacing={10}>
            <ValidationTextFields
              submitToServer={submitLeetcodeLink}
            ></ValidationTextFields>
          </Grid>
        </Grid>
        
      </header>
      <header className="Output-box">
        <Grid
          container
          justifyContent="center"
        >
          <Grid item xs></Grid>
          <Grid item xs={10}>
            <OutputBox></OutputBox>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
