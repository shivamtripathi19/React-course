import React from "react";
import "./index.css";
import Form from "./components/Form";
import List from "./components/List";
function App() {
  const [list, setList] = React.useState([]);
  const handleFormData = (data) => {
    setList([...list, data]);
  };
  return (
    <div>
      <Form lable="Username" handleFormData={handleFormData} />
      <List list={list}/>
    </div>
  );
}

export default App;
