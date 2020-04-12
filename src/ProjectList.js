import React from "react";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import useStyles from "./TodoStyles";

function ProjectList(props) {
  const classes = useStyles();
  const { selectedProject, onProjectChanged, projectTaskList } = props;
  return (
    <FormControl variant="outlined" classes={{ root: classes.formControl }}>
      <Select
        labelId="selector"
        id="selector"
        value={selectedProject}
        onChange={(event) => onProjectChanged(event)}
        classes={{ outlined: classes.outlined }}
        MenuProps={{
          getContentAnchorEl: null,
          transformOrigin: { vertical: "top", horizontal: "right" },
          anchorOrigin: { vertical: "bottom", horizontal: "right" },
        }}
      >
        {projectTaskList &&
          projectTaskList.length &&
          projectTaskList.map((project) => (
            <MenuItem
              key={project.name}
              value={project.name}
              classes={{
                root: classes.menuItem,
                selected: classes.menuItemSelected,
              }}
            >
              {project.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default ProjectList;
