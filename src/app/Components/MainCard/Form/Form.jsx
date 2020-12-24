import React, { useContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import { TrackerContext } from '../../../Context/Context'

import useStyle from './styles'



const initialValues ={
    type:'Income',
    category:'',
    amount:'',
    date: new Date()
}

export default function Form() {
    const { createTransaction ,deleteTransaction } = useContext(TrackerContext)
    const classes = useStyle()
    const [formData, setFormData] = useState(initialValues)
    
    const addTransaction = () =>{
        const transition ={...formData, amount: Number(formData.amount), id: uuidv4()}
        createTransaction(transition)
        setFormData(initialValues)
    }

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
                    <Select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value}) } >
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item  xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value}) } >
                        <MenuItem value='Rent'>Rent</MenuItem>
                        <MenuItem value='Work'>Work</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value}) }  type='number' label='Amount' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.date} onChange={e => setFormData({...formData, date: e.target.value}) } type='date' label='Date' fullWidth />
            </Grid>
            <Button className={classes.button} fullWidth color='primary' variant='outlined' onClick={addTransaction} >
               Create
            </Button>
        </Grid>
    )
}
