import React from 'react'

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import useStyle from './styles'

export default function Form() {
    const classes = useStyle()
    return (
        <Grid container spacing={2}>
            <Grid  item xs={12}>
                <Typography variant='subtitle2' align='center'>
                    ...........
                </Typography>
            </Grid>
            <Grid item  xs={6}>
                <FormControl  fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item  xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value='Rent'>Rent</MenuItem>
                        <MenuItem value='Work'>Work</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth />
            </Grid>
            <Button className={classes.button} fullWidth color='primary' variant='outlined'>
               Create
            </Button>
        </Grid>
    )
}
