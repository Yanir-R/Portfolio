import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'

interface aboutProps { }

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(8),
            margin: `${theme.spacing(1)}px auto`,
            background: 'blue'


        },
    })
)

export const About: React.FC<aboutProps> = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.content}  >
            <Grid item xs={8} className={classes.toolbar}  >

                <Typography variant='h3'   >
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <Typography variant='h3' align='center'>
                    hello
              </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3' >
                    hello
              </Typography>
            </Grid>
        </Grid>

    );
}

