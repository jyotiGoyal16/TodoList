import React from "react";
import useStyles from "./TodoStyles";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  Paper,
} from "@material-ui/core";

function TaskList(props) {
  const classes = useStyles();
  const { projectTasks, checkedTasks } = props;

  return (
    <Paper classes={{ root: classes.paperRoot }}>
      <List className={classes.list}>
        {projectTasks &&
          projectTasks.length &&
          projectTasks.map((task, index) => (
            <ListItem key={index} divider={true}>
              <Checkbox
                checked={checkedTasks.includes(task.taskName)}
                onClick={() => props.onChecked(task.taskName)}
                disableRipple
                classes={{
                  root: classes.checkbox,
                  checked: classes.checkboxChecked,
                }}
              />
              <ListItemText
                primary={task.taskName}
                className={classes.listItemText}
                onClick={() => props.onChecked(task.taskName)}
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

export default TaskList;
