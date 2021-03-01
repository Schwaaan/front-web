import React, { Fragment } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import DeleteIcon from "@material-ui/icons/Delete";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import axios from "axios";

function removePassword(e) {
  return axios.delete(`http://localhost:8070/v1/passwords`).then((res) => {
    if (res.status === 200) {
      alert("Senhas Removidas com sucesso");
    }
  });
}

function callPassword(e) {
  return axios
    .put(`http://localhost:8070/v1/passwords/calls`)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(res.data);
        alert("Senha chamada com sucesso :" + res.data.value);
      }
    })
    .catch((error) => {
      console.log(error.message);
      alert("Nenhuma senha para ser chamada");
    });
}

export default function ManagerPage() {
  return (
    <Fragment>
      <ButtonComponent
        text="Chamar próxima senha"
        icon={<TurnedInIcon />}
        color="primary"
        function={callPassword}
        style={{
          margin: "3%",
        }}
      />
      <ButtonComponent
        text="Reiniciar Senhas"
        icon={<DeleteIcon />}
        function={removePassword}
        color="secondary"
        style={{
          margin: "3%",
        }}
      />
    </Fragment>
  );
}
