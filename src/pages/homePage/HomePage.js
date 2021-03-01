import React, { Fragment } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TableComponent from "../../components/TableComponent";
import axios from "axios";

function createPasswordPreferencial(type) {
  let json = {
    type: "PREFERENCIAL",
    status: "PENDING",
  };

  return axios.post(`http://localhost:8070/v1/passwords`, json).then((res) => {
    console.log(res);
    alert("Sua senha é " + res.data.value);
  });
}

function createPasswordNormal(type) {
  let json = {
    type: "NORMAL",
    status: "PENDING",
  };
  return axios.post(`http://localhost:8070/v1/passwords`, json).then((res) => {
    console.log(res);
    alert("Sua senha é " + res.data.value);
  });
}

export default function HomePage() {
  return (
    <Fragment>
      <ButtonComponent
        color="primary"
        text="Gerar nova senha"
        icon={<TurnedInIcon />}
        function={createPasswordNormal}
        style={{
          margin: "3%",
        }}
      />
      <ButtonComponent
        color="primary"
        text="Gerar nova Senha Preferencial"
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
