import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'

function Notification({ notify, setNotify }) {
    const handleClose = () => {
        setNotify({
            ...notify,
            isOpen: false
        })
    }
    return (
        <>
            <Snackbar
                open={notify.isOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity={notify.type}>
                    {notify.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Notification
