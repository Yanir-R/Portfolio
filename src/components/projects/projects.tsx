import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'

interface projectsProps { }

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

export const Projects: React.FC<projectsProps> = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <h1>Projects page</h1>
            </div>
        </main>
    );
}