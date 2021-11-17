import React from "react";
import PreviewCard from "../components/PreviewCard";
import { data } from "../static/data";
export default function CardList() {
  return (
    <div className="preview">
      {data.map((ele) => (
        <PreviewCard data={ele} key={ele._id} />
      ))}
    </div>
  );
}
