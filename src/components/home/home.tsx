import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'

interface homeProps { }

const drawerWidth = 370;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // necessary for component to be at the right size of the page
        content: {
            color: theme.palette.common.white,
            marginRight: drawerWidth,
            textAlign: 'center',
        },

    })
)

export const Home: React.FC<homeProps> = () => {
    const classes = useStyles()
    return (
        <Box className={classes.content}>
            <Typography>
                Home Page
            </Typography>
        </Box>
    );
}