import React, { useEffect, useState } from "react";
import withWidth from "@material-ui/core/withWidth";
import { Typography } from "@material-ui/core";
import useStyles from "./TodoStyles";
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

function App(props) {
  const classes = useStyles();
  const [projectTaskList, setProjectTaskList] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [projectTasks, setProjectTasks] = useState([]);
  const [checkedTasks, setChecked] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5e90316a330000741327d563")
      .then((res) => res.json())
      .then(
        (result) => {
          setInitialData(result.projects);
        },
        (error) => {
          setInitialData([]);
        }
      );
  }, []);

  const setInitialData = (data) => {
    setProjectTaskList(data);
    if (data && data.length) {
      setSelectedProject(data[0].name);
      setProjectTasks(data[0].tasks);
    }
    setLoading(false);
  };

  const onChecked = (data) => {
    setChecked((prevState) =>
      prevState.includes(data)
        ? prevState.filter((status) => status !== data)
        : [...prevState, data]
    );
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
    const tasksList =
      projectTaskList &&
      projectTaskList.length &&
      projectTaskList.find((project) => project.name === event.target.value);
    tasksList ? setProjectTasks(tasksList.tasks) : setProjectTasks([]);
  };

  if(loading){
    return <div className={classes.container}>
      <Typography variant="h6" component="h6" className={classes.heading}>
        Loading...
      </Typography>
    </div>
  }

  return (
    <div className={classes.container}>
      {Boolean(projectTaskList && projectTaskList.length) ? (<React.Fragment>
        <Typography variant="h4" component="h4" className={classes.heading}>
        To-Do
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        display={props.width === "xs" ? "block" : "inline"}
        className={classes.projectDropdown}
      >
        Select Project
      </Typography>
      <ProjectList
        selectedProject={selectedProject}
        onProjectChanged={handleProjectChange}
        projectTaskList={projectTaskList}
      />
      <TaskList
        projectTasks={projectTasks}
        checkedTasks={checkedTasks}
        onChecked={onChecked}
      />
      </React.Fragment>) : (
        <div>
          <Typography variant="h4" component="h4" className={classes.heading}>
            Unable to fetch Project data
          </Typography>
        </div>
      )}
    </div>
  );
}

export default withWidth()(App);
