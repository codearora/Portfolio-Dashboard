import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <List>
                {['Dashboard', 'FAQs', 'Support'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;
