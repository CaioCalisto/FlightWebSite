import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

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
      <p onClick={toggleDrawer(true)}>Menu</p>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 150 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to="flights">
              <ListItem key={"flight"} disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Flight"} />
                  &#9992;
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="carhire">
              <ListItem key={"carHire"} disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Car Hire"} />
                  &#128665;
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <ListItem key={"hotels"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Hotels"} />
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
