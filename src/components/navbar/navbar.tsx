import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

interface navbarProps { }

const drawerWidth = 370;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },

    }),
);
export const Navbar: React.FC<navbarProps> = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Box m='auto' >
                        Portfolio
       </Box>
                </Toolbar>
            </AppBar>
     
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} />
                <Divider />
                <Router>
                    <Box mx='auto'>
                        Frontend Developer
                    </Box>

                    <Box m='auto' display='flex'>

                        <Box p={2}>
                            <Link to={'/'}>
                                HOME
                    </Link>
                        </Box>

                        <Box p={2}>
                            <Link to={'/about'}>
                                ABOUT
                    </Link>
                        </Box>
                        <Box p={2}>
                            <Link to={'/project'}>
                                PROJECT
                    </Link>
                        </Box>
                        <Box p={2}>
                            <Link to={'/contact'}>
                                CONTACT
                    </Link>
                        </Box>

                    </Box>

                </Router>
            </Drawer>
        </div>

    );
}