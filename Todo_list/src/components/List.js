import React from "react";

import { Lists, ListItem } from "../Styled/index";
export default function List({ list }) {
  return (
    <Lists>
      {list.map((ele) => {
        return <ListItem key={ele}>{ele}</ListItem>;
      })}
    </Lists>
  );
}
