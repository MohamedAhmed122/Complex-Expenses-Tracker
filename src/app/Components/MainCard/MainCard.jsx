import React from 'react'

import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'

import useStyle from './Styles'
import Form from './Form/Form'
import Tracker from './Tracker/Tracker'


export default function MainCard() {
    const classes = useStyle()
    return (
        <Card className={classes.root} >
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly'/>
            <CardContent>
                <Typography variant='h5' align='center'>Total Balance is 100$</Typography>
                <Typography variant='subtitle2' style={{ marginTop: 25, lineHeight:'1.5rem'}}>
                    Try Saying Add income for 100$ in Category salary for Monday 
                </Typography>
                <Divider />
                <Form/>
            </CardContent>
             <CardContent className={classes.cartContent}>
                 <Grid container spacing={2}>
                     <Grid item xs={12}>
                         <Tracker />
                     </Grid>
                 </Grid>
             </CardContent>
        </Card>
    )
}
