import React from "react";
import AppBar from "@mui/material/AppBar";
import {Toolbar, Typography, IconButton, Box} from "@mui/material";
import {Badge, Button} from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          sx={{
            flexGrow: 1,
          }}>
          Ecomm
        </Typography>
        <Box sx={{display: {md: "flex"}}}>
          <IconButton size="large" aria-lable="shows cart items count" color="inherit">
            <Badge badgeContent={1} color="error">
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
