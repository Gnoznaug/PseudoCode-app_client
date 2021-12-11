import './App.css';
import ValidationTextFields from './components/ValidationTextFields/ValidationTextFields';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { submitLeetcodeLink, urlChecker } from './services'

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
              linkChecker={urlChecker}
            ></ValidationTextFields>
          </Grid>
        </Grid>
        
      </header>
    </div>
  );
}

export default App;
