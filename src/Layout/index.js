import React from 'react'
import { useStyles } from './styles'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout({ children }) {
    const classes = useStyles()
    return (
        <>
            <Header />
            <div className={classes.root}>
                <Sidebar />
                <div className={classes.page}>
                    <div className={classes.toolbar}></div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
