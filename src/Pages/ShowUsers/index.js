import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Paper } from '@mui/material'
import Notification from '../../components/Notification'
import { BASEURL } from '../../constants/Urls'
import DataCard from './Users/DataCard'

function ShowUsers() {
    const [data, setData] = useState([])
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const deleteItem = async (id) => {
        try {
            await axios.delete(`${BASEURL}/notes/${id}`)
                .then(() => {
                    setNotify({
                        isOpen: true,
                        message: 'Successfully deleted',
                        type: 'success'
                    })

                    setData(data.filter(item => item.id != id))
                })
        } catch (err) {
            setNotify({
                isOpen: true,
                message: 'Something went wrong',
                type: 'error'
            })
        }
    }

    useEffect(async () => {
        try {
            await axios.get(`${BASEURL}/notes`)
                .then(res => {
                    setData(res.data)
                    !res.data.length &&
                        setNotify({
                            isOpen: true,
                            message: 'List is Empty',
                            type: 'info'
                        })

                })
        } catch (err) {
            setNotify({
                isOpen: true,
                message: 'Something went wrong',
                type: 'error'
            })
        }
    }, [])

    return (
        <>
            <Grid container spacing={3} rowSpacing={1} columnSpacing={3} >
                {data.slice(0).reverse().map((item) =>
                    <Grid item
                        key={item.id}
                        xs={12}
                        sm={6}
                        md={3}
                    >
                        <Paper>
                            <DataCard item={item} deleteItem={deleteItem} />
                        </Paper>
                    </Grid>
                )}
            </ Grid>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </>
    )
}

export default ShowUsers
