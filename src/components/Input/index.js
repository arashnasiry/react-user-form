import { React, useEffect } from 'react'
import { useField } from 'formik'
import TextField from '@mui/material/TextField'
import { useStyles } from './Styles'

function Input({ label, data, ...rest }) {
    const classes = useStyles()
    const [filed, meta] = useField(rest)

    useEffect(() => {
        if (data.submitCount === 1) {
            data.setFieldTouched(rest.name, false);
        }
    }, [])

    return (
        <TextField
            className={classes.root}
            label={label}
            margin='normal'
            fullWidth
            variant="outlined"
            size="small"
            color="secondary"
            {...filed}
            error={meta.touched && !!(meta.error)}
            helperText={meta.touched && meta.error}

        />

    )
}

export default Input
