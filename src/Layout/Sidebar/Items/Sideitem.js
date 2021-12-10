import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'

function Sideitem({ item }) {
    const history = useHistory()
    const location = useLocation()
    return (
        <ListItem
            onClick={() => {
                history.push(item.path)
            }}
            sx={location.pathname === item.path ? { backgroundColor: '#f9f9f9' } : null}
        >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
        </ListItem>
    )
}

export default Sideitem
