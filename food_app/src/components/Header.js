import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  withStyles,
  IconButton,
} from "@material-ui/core";


import FastfoodIcon from "@material-ui/icons/Fastfood";
import KartBtn from "./KartBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Header() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <FastfoodIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Food Order App
          </Typography>
         <KartBtn/>
          {/* <Button color="inherit">
            <ShoppingCartIcon />
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
