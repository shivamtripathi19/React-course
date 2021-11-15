import React from "react";

import { Button, Div, Input, FormTag, Label } from "../Styled/index";

export default function Form({ lable, handleFormData }) {
  const [username, setUsername] = React.useState("");
  const [isBorder, SetisBorder] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (username) {
      handleFormData(username);
      SetisBorder(false);
      setUsername("");
    } else {
      SetisBorder(true);
      setTimeout(() => SetisBorder(false), 2000);
    }
  };
  return (
    <FormTag onSubmit={onSubmit}>
      <Label htmlFor={lable}>{lable}</Label>
      <Div>
        <Input
          style={{ boxSizing: "inset 0 1px 2px rgba(0, 0, 0, 0.15)" }}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isBorder={isBorder}
        />
        <Button type="submit">submit</Button>
      </Div>
    </FormTag>
  );
}
