import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    backgroundColor: '#1E1E2F',
    color: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const LogoImage = styled('img')({
    height: 40,
    marginRight: 16,
});

const ContentWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const WelcomeText = styled(Typography)({
    fontWeight: 'bold',
    marginRight: 16,
});

const StyledMenuItem = styled(MenuItem)({
    color: '#1E1E2F',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#1E1E2F',
    },
});

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" elevation={0} color="transparent">
            <StyledToolbar>
                <LogoImage src="logo.png" alt="Logo" />
                <ContentWrapper>
                    {/* <Typography variant="h6" component="div">
                        Sidebar Content
                    </Typography> */}
                    <WelcomeText variant="h6">
                        Welcome, Johan Paul
                    </WelcomeText>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem onClick={handleClose}>My Profile</StyledMenuItem>
                            <StyledMenuItem onClick={handleClose}>My FDs</StyledMenuItem>
                            <StyledMenuItem onClick={handleClose}>My Transactions</StyledMenuItem>
                            <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
                        </Menu>
                    </div>
                </ContentWrapper>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header;
