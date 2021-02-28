import React, { Fragment } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import DeleteIcon from "@material-ui/icons/Delete";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import axios from "axios";

function handleClick(e) {
  e.preventDefault();
  console.log("Ok");
  return alert("teste");
}

function removePassword(e) {
  return axios
    .delete(`https://spring-java-test123.herokuapp.com/v1/passwords`)
    .then((res) => {
      if ((res.status = 200)) {
        return alert("Senhas Removidas com sucesso");
      }
    });
}

function callPassword(e) {
  return axios
    .put(`https://spring-java-test123.herokuapp.com/v1/passwords/calls`)
    .then((res) => {
      if ((res.status = 200)) {
        console.log(res.data);
        return alert("Senha chamada com sucesso :" + res.data.value);
      }
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
