import React from "react";

export default function List(props) {
  const { title, friendList } = props;
  const handleList = friendList.map((ele) => {
    return <li key={ele.id}>{ele.name}</li>;
  });
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <ul>{handleList}</ul>
    </React.Fragment>
  );
}
