import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from "react";
import { Link } from "react-router-dom";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';

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
      <IconButton onClick={toggleDrawer(true)} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
                  <AirplanemodeActiveIcon />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="carhire">
              <ListItem key={"carHire"} disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Car Hire"} />
                  <DirectionsCarIcon />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <ListItem key={"hotels"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Hotels"} />
                <HotelIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default SideBarMenu;
