import React, { useContext } from 'react'

import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Styles.js'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@material-ui/core';
import { TrackerContext } from '../../../Context/Context.js';

export default function Tracker() {
    const classes = useStyles()

    const {transactions, deleteTransaction} = useContext(TrackerContext)
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
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)} >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </List>
    )
}
