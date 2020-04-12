import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 500,
    margin: "50px auto",
    textAlign: "center",
    background: "white",
    color: "black",
    border: "10px solid #01a3a4",
    borderRadius: "10px",
    paddingBottom: "20px",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 350,
    },
  },
  heading: {
    color: "#666666",
    fontWeight: 600,
    padding: 24,
  },
  projectDropdown: {
    color: "#666666",
    padding: 20,
  },
  formControl: {
    verticalAlign: "middle",
  },
  outlined: {
    border: "2px solid rgba(5, 167, 146, 0.5)",
    "&:focus": {
      border: "2px solid rgba(5, 167, 146, 0.5)",
    },
  },
  menuItem: {
    "&:hover": {
      background: "rgba(5, 167, 146, 0.2)",
    },
    "&$menuItemSelected": {
      background: "rgb(3, 116, 102)",
      color: "white",
      "&:hover": {
        background: "rgba(5, 167, 146, 0.2)",
        color: "#666666",
      },
    },
  },
  menuItemSelected: {},
  checkbox: {
    color: "#01a3a4",
    '&:hover':{
      background:"white"
    },
    "&$checkboxChecked": {
      color: "#01a3a4",
    },
  },
  checkboxChecked: {},
  listItemText: {
    color: "#666666",
    cursor: "pointer"
  },
  paperRoot: {
    margin: 16,
    maxHeight: "300px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: 200,
    },
  },
  list: {
    maxHeight: "250px",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      maxHeight: 105,
    },
  },
}));

export default useStyles;
