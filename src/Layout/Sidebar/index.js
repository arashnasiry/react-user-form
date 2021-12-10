import React from 'react'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import menuItems from '../../constants/Menu'
import Sideitem from './Items/Sideitem'
import { useStyles } from './Styles'

function Sidebar() {
    const classes = useStyles()
    return (
        <Drawer
            container
            className={classes.Drawer}
            variant='permanent'
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
        >
            <List >
                {
                    menuItems.map((item) =>
                        <Sideitem key={item.text} item={item} />
                    )
                }

            </List>
        </Drawer >
    )
}

export default Sidebar
