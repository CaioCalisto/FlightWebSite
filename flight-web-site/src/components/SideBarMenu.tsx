import { Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SideBarMenu() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem key={'flight'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Flight'} />
                &#9992; 
              </ListItemButton>
            </ListItem>
            <ListItem key={'carHire'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Car Hire'} />
                &#128665;
              </ListItemButton>
            </ListItem>
            <ListItem key={'hotels'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Hotels'} />
                &#127977;
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default SideBarMenu;
