import { makeStyles } from '@material-ui/core'

const DrawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        Drawer: {
            width: '240px'
        },
        title: {
            padding: theme.spacing(3)
        },
        drawerPaper: {
            width: DrawerWidth
        },
    }
})

export { useStyles }