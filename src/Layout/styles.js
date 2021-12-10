import { makeStyles } from '@material-ui/core'

const DrawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            padding: theme.spacing(3)
        },
        Drawer: {
            width: DrawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            backgroundColor: '#f9f9f9'
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: {
            width: '200px',
            backgroundColor: '#fefefe'
        },
        date: {
            flexGrow: 1,
        },
        toolbar: theme.mixins.toolbar
    }
})

export { useStyles, DrawerWidth }