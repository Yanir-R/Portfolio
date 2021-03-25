import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

interface homeProps { }

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(5),
        },
    })
)

export const Home: React.FC<homeProps> = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <h1>Home page</h1>
            </div>
        </main>
    );
}