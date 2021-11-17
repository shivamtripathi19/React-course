import React, { useEffect } from "react";
import {
  Badge,
  withStyles,
  IconButton,
  makeStyles,
  Button,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KartContext from "../store/KartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  footerModal: {
    display: "flex",
    flexDirection: "column",
  },
  footerTotal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerTag: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  orderList: {
    display: "flex",
    margin: "25px",
    justifyContent: "space-between",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
  },
  desc: {
    fontSize: "1rem",
    lineHeight: "1rem",
    color: "rgb(156, 156, 156)",
    margin: "0.3rem 0px 0px 0.5rem",
  },
  pTitle: {
    fontSize: "1rem",
    margin: "0px",
    color: "rgb(54, 54, 54)",
    fontWeight: "800",
  },
  kqXlKR: {
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "0px 1rem",
    color: "rgb(28, 28, 28)",
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
  sidePrice: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

export default function KartBtn() {
  const classes = useStyles();
  const kartHandle = React.useContext(KartContext);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const totalCost = kartHandle.orderList.reduce((acc, ele) => {
    return (acc = acc + parseInt(ele.price) * parseInt(ele.itemCount));
  }, 0);

  useEffect(() => {}, [kartHandle.orderList]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ margin: "20px" }}>
        Your Orders
      </h2>
      <hr />
      <p id="simple-modal-description"></p>
      <div className={classes.footerModal}>
        {kartHandle.orderList.map((ele) => {
          return (
            <div key={ele._id} className={classes.orderList}>
              <div>
                <p className={classes.pTitle}>{ele.title}</p>
                <p className={classes.desc}>{ele.description}</p>
              </div>

              <div className={classes.sidePrice}>
                <p> ₹ {parseInt(ele.price) * parseInt(ele.itemCount)}</p>
                <div className={classes.counter}>
                  <span
                    className={classes.minus}
                    onClick={() => {
                      if (ele.itemCount <= 1) {
                        if (kartHandle.orderList.length === 1) {
                          handleClose();
                        }
                        kartHandle.onRemoved(ele._id);
                      } else if (ele.itemCount > 0)
                        kartHandle.onDecrement(ele._id);
                    }}
                  >
                    -
                  </span>
                  <span className={classes.minus}>{ele.itemCount}</span>
                  <span
                    className={classes.minus}
                    onClick={() => kartHandle.onIncrement(ele._id)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <div className={classes.total}>
          <div className={classes.footerTag}>
            {" "}
            Your Order ({kartHandle.orderList.length})
          </div>
          <div className={classes.footerTotal}>
            <p className={classes.kqXlKR}> Subtotal: ₹{totalCost}</p>
            <Button color="secondary" variant="contained">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <IconButton aria-label="cart" onClick={handleOpen}>
        <StyledBadge
          badgeContent={kartHandle.orderList.length}
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
