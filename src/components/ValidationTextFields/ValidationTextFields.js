import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import React from 'react';

export default function ValidationTextFields({ submitToServer, linkChecker }) {
  const [questionURL, setQuestionURL] = useState("");
  const [pseudoCode, setPseudoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState("");
  const [error, setError] = useState(false);

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      if (await linkChecker(questionURL)) {
        setError(true);
        setQuestionURL("Please enter a valid link");
      } else {
        setError(false);
        setLoading(true);
        setOutline("");
        setPseudoCode( await submitToServer(questionURL));
        setLoading(false);
        setOutline("outlined")
      }
    }
  }

  return (
    <div>
        <FormControl>
            <InputLabel htmlFor="component-error">LeetCode problem link</InputLabel>
            <OutlinedInput
            required
            label="LeetCode problem link"
            id="component-outlined"
            error={error}
            value={questionURL}
            onChange={(e) => setQuestionURL(e.target.value)}
            onKeyDown={handleEnter}
            />
        </FormControl>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs></Grid>
        <Grid item xs={12}>
          <Paper variant={outline}>
            {loading === true ? <CircularProgress color="inherit"/> :
            (pseudoCode+'').split('#').map(line => <Typography align="left" variant="h6">{line}</Typography>)}
          </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </div>
  );
}
