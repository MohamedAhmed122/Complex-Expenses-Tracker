import React from 'react'

import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Styles.js'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@material-ui/core';

export default function Tracker() {
    const classes = useStyles()
    const transactions =[
        {id: 1, type: 'Income', category:'Salary',amount: 100, date: "Wed Dec 23"},
        {id: 1, type: 'Expense', category:'Pets',amount: 50, date: "Wed Dec 29"},
        {id: 1, type: 'Income', category:'Work',amount: 40, date: "Wed Dec 30"},
    ] 
    return (
        <List dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOffIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </List>
    )
}
