import React, { useEffect } from "react";
const KartContext = React.createContext({
  orderList: [],
  onAdded: (data) => {},
  onRemoved: (_id) => {},
  onIncrement: (_id) => {},
  onDecrement: (_id) => {},
});

export const KartProvider = (props) => {
  const [orderList, setOrderList] = React.useState([]);
  const onRemoved = (_id) => {
    const newList = orderList.filter((ele) => ele._id !== _id);
    setOrderList(newList);
  };

  const commonOperations = (_id, num, op) => {
    const index = orderList.findIndex((ele) => ele._id === _id);
    const order = orderList[index];
    op === "+"
      ? (order.itemCount = order.itemCount + num)
      : (order.itemCount = order.itemCount - num);
    const list = orderList.filter((item, idx) => idx !== index);
    return [...list, order];
  };

  const onIncrement = (_id) => {
    setOrderList(commonOperations(_id, 1, "+"));
  };

  const onDecrement = (_id) => {
    setOrderList(commonOperations(_id, 1, "-"));
  };

  useEffect(() => {}, [orderList]);

  const onAdded = (data) => {
    const index = orderList.findIndex((ele) => ele._id === data._id);
    if (index !== -1) {
      const order = orderList[index];
      order.itemCount = order.itemCount + data.itemCount;
      const list = orderList.filter((item, idx) => idx !== index);
      setOrderList([...list, order]);
    } else {
      setOrderList([...orderList, data]);
    }
  };

  return (
    <KartContext.Provider
      value={{
        orderList: orderList,
        onAdded: onAdded,
        onRemoved: onRemoved,
        onIncrement: onIncrement,
        onDecrement: onDecrement,
      }}
    >
      {props.children}
    </KartContext.Provider>
  );
};

export default KartContext;
