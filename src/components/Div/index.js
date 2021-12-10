import React from 'react'
import { Box } from '@mui/material'
import { useStyles } from './Styles'

function Div({ children, ...rest }) {
    const classes = useStyles()
    return (
        <Box className={classes.form}>
            {children}
        </Box>
    )
}

export default Div
