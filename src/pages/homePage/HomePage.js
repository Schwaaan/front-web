import React, { Fragment } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TableComponent from "../../components/TableComponent";
import axios from "axios";

function handleClick(e) {
  e.preventDefault();
  console.log("Ok");
  return alert("teste");
}

function createPasswordPreferencial(type) {
  let json = {
    type: "PREFERENCIAL",
    status: "PENDING",
  };
  return axios
    .post(`https://spring-java-test123.herokuapp.com/v1/passwords`, json)
    .then((res) => {
      console.log(res);
    });
}

function createPasswordNormal(type) {
  let json = {
    type: "NORMAL",
    status: "PENDING",
  };
  return axios
    .post(`https://spring-java-test123.herokuapp.com/v1/passwords`, json)
    .then((res) => {
      console.log(res);
    });
}

export default function HomePage() {
  return (
    <Fragment>
      <ButtonComponent
        text="Gerar nova senha Normal"
        icon={<TurnedInIcon />}
        function={createPasswordNormal}
        style={{
          margin: "3%",
        }}
      />
      <ButtonComponent
        text="Gerar nova Preferencial"
        icon={<TurnedInIcon />}
        function={createPasswordPreferencial}
        style={{
          margin: "3%",
        }}
      />
      <TableComponent />
    </Fragment>
  );
}
