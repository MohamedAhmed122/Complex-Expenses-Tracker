import React from 'react'
import { PushToTalkButtonContainer, PushToTalkButton, ErrorPanel } from '@speechly/react-ui'
import { Grid } from '@material-ui/core';
import useStyles from './Styles'
import CardDetails from './app/Components/CardDetails/CardDetails';
import MainCard from './app/Components/MainCard/MainCard';



function App() {
  const classes = useStyles()


  return (
    <>
      <div>
        <Grid className={classes.grid} container alignItems='center' justify='center' spacing={0} style={{height:'100vh'}}>
          <Grid item xs={12} sm={4}>
            <CardDetails title='Income' price={120} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <MainCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardDetails title='Expense' price={70} />
          </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </div>
    </>
  );
}

export default App;
