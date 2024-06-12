import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import SupportIcon from '@mui/icons-material/Support';

function Sidebar() {
    const items = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'FAQs', icon: <HelpIcon /> },
        { text: 'Support', icon: <SupportIcon /> }
    ];

    return (
        <Drawer variant="permanent" anchor="left" sx={{ width: 180, '& .MuiDrawer-paper': { width: 180, boxSizing: 'border-box', backgroundColor: '#1E1E2F', color: '#fff' } }}>
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                    MyApp
                </Typography>
            </Box>
            <List>
                {items.map((item, index) => (
                    <ListItem button key={item.text} sx={{ '&:hover': { backgroundColor: '#2E2E3E' } }}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ '& .MuiTypography-root': { fontSize: '1.1rem', fontWeight: 500 } }} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;
