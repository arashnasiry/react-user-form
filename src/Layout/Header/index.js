import React from 'react'
import { format } from 'date-fns'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { DrawerWidth, useStyles } from './styles'

function Header() {
    const classes = useStyles()
    return (
        < AppBar
            elevation={0}
            sx={{
                width: `calc(100% - ${DrawerWidth}px)`
            }}
        >
            < Toolbar >
                <Typography className={classes.date}>
                    Today is :{format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>
                    Users App
                </Typography>
                <Avatar src="avatarPic.jpg" className={classes.avatar} />
            </Toolbar >
        </AppBar>
    )
}

export default Header
