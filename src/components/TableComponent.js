import React from "react";
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

function getPasswordCalling(e) {
  return axios
    .get(`https://spring-java-test123.herokuapp.com/v1/passwords`)
    .then((res) => {
      console.log(res.data.value);
      createData(res.data.value);
      setTimeout(this.getPasswordCalling, 1000 * 60);
    });
}

function createData(data) {
  return { data };
}

const data = createData("Frozen yoghurt", 159, 6.0, 24, 4.0);

const data1 = createData(getPasswordCalling());

export default function TableComponent(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "center" }}>Senha atual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={data1.data}>
            <TableCell
              component="th"
              scope="row"
              style={{ textAlign: "center" }}
            >
              {data1.data}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
