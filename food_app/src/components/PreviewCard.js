import React, {useEffect} from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KartContext from "../store/KartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 298,
    margin: "25px",
  },
  actions: {
    justifyContent: "space-between",
  },
  action: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    height: "4rem",
    margin: "9px",
    borderRadius: "14px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  counters: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  pointer: {
    cursor: "pointer",
  },
  title: {
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "rgb(105, 105, 105)",
    maxWidth: "56%",
    padding: "0px 0px 0.4rem",
  },
  prizeTag: {
    fontSize: "inherit",
    lineHeight: "1.5",
    margin: "0px",
    textAlign: "right",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "rgb(105, 105, 105)",
  },
  h4: {
    lineHeight: "1.2",
    fontWeight: "500",
    textAlign: "left",
    fontSize: "1.7rem",
    margin: "0.8rem 0px 0.6rem",
    maxWidth: "80%",
    color: "rgb(28, 28, 28)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  tag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(36, 150, 63)",
    color: "rgb(255, 255, 255)",
    height: "2rem",
    minWidth: "2.6rem",
    padding: "0px 0.4rem",
    fontSize: "1.3rem",
    borderRadius: "0.6rem",
    border: "1px solid rgb(36, 150, 63)",
  },
  counter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    width: "6rem",
    height: "2rem",
    border: "0.5px solid rgb(239, 79, 95)",
    borderRadius: "0.6rem",
    overflow: "hidden",
    cursor: "initial",
    background: "rgb(239, 79, 95)",
  },

  minus: {
    position: "relative",
    width: "100%",
    flexGrow: "0",
    flexShrink: "0",
    maxWidth: "31.6667%",
    padding: "0px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export default function PreviewCard(props) {
  const { title, url, rating, description, price } = props.data;
  const classes = useStyles();
  const [itemCount, setItemCount] = React.useState(1);
  const kartHandle = React.useContext(KartContext);

  const handleOrder = (orderItem) => {
    const obj = { ...orderItem, itemCount: itemCount };
    kartHandle.onAdded(obj);
  };

  useEffect(() => {}, [kartHandle.orderList]);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={url} title="Paella dish" />
      <CardActions disableSpacing className={classes.action}>
        <h4 className={classes.H4}>{title}</h4>
        <div className={classes.tag}>{rating}✭</div>
      </CardActions>

      <CardActions disableSpacing className={classes.action}>
        <p className={classes.title}>{description}</p>
        <p className={classes.prizeTag}>₹{price} for one</p>
      </CardActions>
      <CardActions className={classes.actions}>
        <Button
          disabled={!itemCount}
          variant="contained"
          color="secondary"
          onClick={() => handleOrder(props.data)}
        >
          Order
        </Button>

        <div className={classes.counter}>
          <span className={classes.minus}>
            <ExpandLessIcon
              className={classes.pointer}
              onClick={() => setItemCount(itemCount + 1)}
            />
          </span>

          <span className={classes.minus}>{itemCount}</span>
          <span className={classes.minus}>
            <ExpandMoreIcon
              className={classes.pointer}
              onClick={() => {
                if (itemCount > 0) setItemCount(itemCount - 1);
              }}
            />
          </span>
        </div>
      </CardActions>
    </Card>
  );
}
