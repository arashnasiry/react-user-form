import React from 'react'
import { useStyles } from './Styles'
import { Button, Box } from '@mui/material'

function ButtonBar({ step, handleBack, ...rest }) {
    const classes = useStyles()
    return (
        <Box className={classes.form}>
            <Button
                variant="contained"
                size='large'
                sx={step === 0 ? { display: 'none' } : null}
                color="primary"
                onClick={handleBack}
            >
                Back
            </Button>
            <Button
                variant="contained"
                size='large'
                type='submit'
                color="primary"
            >
                {!step ? 'Next' : 'Submit'}
            </Button>

        </Box >
    )
}

export default ButtonBar
