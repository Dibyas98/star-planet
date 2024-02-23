import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { store } from "../../Data";

export default function Cards({ data }) {
  const {HandelResident} =useContext(store)
  const [active, setActive] = useState(false);
  const handelActive = () => {
    setActive(!active);
  };
  return (
    <div className="card"
      onMouseEnter={() => handelActive()}
      onMouseLeave={() => handelActive()}
      style={{overflowY:'scroll',height:'140px'}}
    >
      <Card sx={{ minWidth: 300}} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Climate: {data.climate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {data.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Terrain: {data.terrain}
          </Typography>

          <div className={active ? "people" : "people-not"}>
            {data.residents.map((res) => {
              let s = res.split("/");
              return (
                <Link to={'/resident'} key={nanoid()} onClick={()=>HandelResident(res)}>
                  {s[s.length - 3]} {s[s.length - 2]}
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
