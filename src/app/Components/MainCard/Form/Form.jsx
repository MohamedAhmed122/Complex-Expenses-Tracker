import React, { useContext, useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import { incomeCategories, expenseCategories} from '../../../constants/category'
import { TrackerContext } from '../../../Context/Context'
import formatDate from '../../../Utils/formatDate'

import useStyle from './styles'
import { useSpeechContext } from '@speechly/react-client';

const initialValues ={
    type:'',
    category:'',
    amount:'',
    date: formatDate( new Date())
}

export default function Form() {
    const { createTransaction  } = useContext(TrackerContext)
    const classes = useStyle()
    const [formData, setFormData] = useState(initialValues)
    const { segment } = useSpeechContext();

    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories 

    const addTransaction = () =>{
        const transition ={...formData, amount: Number(formData.amount), id: uuidv4()}
        createTransaction(transition)
        setFormData(initialValues)
    }

    useEffect(() => {
        if (segment) {
          if (segment.intent.intent === 'add_expense') {
            setFormData({ ...formData, type: 'Expense' });
          } else if (segment.intent.intent === 'add_income') {
            setFormData({ ...formData, type: 'Income' });
          } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
            return addTransaction();
          } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
            return setFormData(initialValues);
          }
    
          segment.entities.forEach((s) => {
            const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;
    
            switch (s.type) {
              case 'amount':
                setFormData({ ...formData, amount: s.value });
                break;
              case 'category':
                if (incomeCategories.map((iC) => iC.type).includes(category)) {
                  setFormData({ ...formData, type: 'Income', category });
                } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
                  setFormData({ ...formData, type: 'Expense', category });
                }
                break;
              case 'date':
                setFormData({ ...formData, date: s.value });
                break;
              default:
                break;
            }
          });
    
          if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
            addTransaction();
          }
        }
      }, [segment]);

    

    return ( 
        <Grid container spacing={2}>
            <Grid  item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment ? (
                        <div className="segment">
                        {segment.words.map((w) => w.value).join(" ")}
                        </div>
                    ) : null}
                    {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
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
                        {
                            selectedCategory.map(category =>(
                                 <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value}) }  type='number' label='Amount' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.date} onChange={e => setFormData({...formData, date: (e.target.value)}) } type='date' label='Date' fullWidth />
            </Grid>
            <Button className={classes.button} fullWidth color='primary' variant='outlined' onClick={addTransaction} >
               Create
            </Button>
        </Grid>
    )
}
