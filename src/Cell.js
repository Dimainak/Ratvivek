import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor : "#0c0017",
    border : "2px solid orange",
  },
}));

function Cell(props) {
  const classes = useStyles();

  return (
      <Grid item sm={3} spacing={4}>
        <Paper style={{backgroundColor : props.color}} className={classes.paper} >
        {props.children}
        </Paper>
      </Grid>
  );
}
export default Cell;