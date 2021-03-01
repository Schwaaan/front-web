import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    textAlign: "center",
  },
});

export default function TableComponent() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  useEffect(() => {
    setInterval(getPasswordCalling, 3000);
  }, []);

  function getPasswordCalling() {
    return axios
      .get(`http://localhost:8070/v1/passwords/callings`)
      .then((res) => {
        console.log(res.data);
        setValue(res.data.value);
      })
      .catch((e) => {
        setValue("Nenhuma senha sendo chamada");
      });
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "center" }}>Senha atual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"test"}>
            <TableCell
              component="th"
              scope="row"
              style={{ textAlign: "center" }}
            >
              {value ? value : "Nenhuma senha sendo chamada"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
