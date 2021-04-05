import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

interface contactProps { }

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            
            padding: theme.spacing(5),
        },
    })
)

export const Contact: React.FC<contactProps> = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <h1>Contact page</h1>
            </div>
        </main>
    );
}