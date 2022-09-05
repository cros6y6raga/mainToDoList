import * as React from 'react';
import {AppBar, Box, IconButton, Typography, Button, Toolbar} from '@material-ui/core';

function MenuIcon() {
    return null;
}

export default function ButtonAppBar() {
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    );
}