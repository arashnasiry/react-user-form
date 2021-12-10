import { makeStyles } from '@material-ui/core'

const DrawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        date: {
            flexGrow: 1,
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

export { DrawerWidth, useStyles }