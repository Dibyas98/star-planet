import React, { useContext } from "react";
import Cards from "../Card/Card.jsx";
import { store } from "../../Data.jsx";
import { nanoid } from "nanoid";
import PageNo from "../pagination/PageNo.jsx";
import Loader from "../loader/Loader.jsx";

export default function Planet() {
  const { apiData } = useContext(store);

  if (Object.keys(apiData).length === 0) {
    return <Loader />;
  }

  return (
    <div className="planet">
      <div className="planet-card">
        {apiData.results.map((res) => (
          <Cards key={nanoid()} data={res}></Cards>
        ))}
      </div>
      <PageNo></PageNo>
    </div>
  );
}
