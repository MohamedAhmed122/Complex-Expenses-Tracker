import React from 'react'

import useTransactions from '../../Hooks/useTransactions';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'


import useStyles from './styles';

export default function CardDetails({title}) {

    const {total, chartData } = useTransactions(title)
    const classes = useStyles();

    return (
        <Card className={title ==='Income'? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h3'>
                    {total}$
                </Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}
