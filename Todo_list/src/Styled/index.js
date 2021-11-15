import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 10px;
  text-decoration: uppercase;
  border-radius: 3px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  max-width: 200px;
  color: #e6e6e6;
  background: #141414;
  flex: 1;
  margin-left: 10px;
`;
export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 20px;
  padding: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input((props) => ({
  padding: "8px",
  fontSize: "16px",
  flex: "2",
  borderRadius: "3px",
  border: props.isBorder ? "solid red" : "none",
  background: "rgba(0, 0, 0, 0.08)",
}));

export const Label = styled.label`
  font-size: 20px;
  margin: 5px;
  font-weight: 300;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: 8px;
  font-size: 20px;
  flex: 2;
  border-radius: 3px;
  list-style: none;
  width: 40%;
  border: none;
  margin-bottom: 14px;
  background: rgba(0.9, 90, 0.9, 0.1);
`;
