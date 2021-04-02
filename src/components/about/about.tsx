import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'

interface aboutProps { }
const drawerWidth = 370;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for component to be at the right size of the page
        content: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,

        },
    })
)

export const About: React.FC<aboutProps> = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.content}  >
            <Grid item xs={12}   >
                <Typography align='center'>
                    Hi, <br />
                        My Name is Yanir & im Web-App Developer
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <Typography variant='h3' align='center' >
                    hello
              </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3' align='center'  >
                    hello
              </Typography>
            </Grid>
        </Grid>

    );
}

