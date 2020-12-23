import { Grid } from '@material-ui/core';
import React from 'react'

import useStyles from './Styles'
import CardDetails from './app/Components/CardDetails/CardDetails';


function App() {
  const classes = useStyles()
  return (
    <div>
      <Grid className={classes.grid} container alignItems='center' justify='center' spacing={0} style={{height:'100vh'}}>
        <Grid item xs={12} sm={4}>
          <CardDetails title='Income' />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardDetails title='Expenses' />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
