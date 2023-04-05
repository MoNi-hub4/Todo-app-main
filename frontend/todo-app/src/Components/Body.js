import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ButtonDelete,
  Checked,
  CheckedImg,
  CreateTodo,
  FilterSection,
  InputBox,
  SecondSection,
  SectionContent,
  Todo,
  TodoDiv,
  TodoBox,
  TodoDetailBox,
} from "../styledComponents/BodyStyle";

import CheckedIcon from "../images/icon-check.svg";
import CrossIcon from "../images/icon-cross.svg";

const Body = () => {
  const [Task, setTask] = useState(null);
  const [createTodo, setCreateTodo] = useState({
    task: "",
    isCompleted: 0,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch Data
  const fetchTasks = async () => {
    //Fetch the Todos
    const res = await axios.get("http://localhost:3000/todo");
    //Set to state
    setTask(res.data.todos);
    console.log(res.data.todos);
  };

  // Update Create todo field
  const updateCreateTodoField = (e) => {
    const { name, value } = e.target;
    setCreateTodo({
      ...createTodo,
      [name]: value,
    });
    // console.log({name, value});
  };

  // Create Todo
  const CreateTask = async () => {
    

    //Create the Todo
    const res = await axios.post("http://localhost:3000/todo", createTodo);
    
    console.log(res);
    // Set State
    setTask([...Task, res.data.todo])
    setCreateTodo({task:"" , isCompleted:0});
  };

  return (
    <SecondSection>
      <SectionContent>
        <CreateTodo>
          <InputBox onBlur={CreateTask}
            onChange={updateCreateTodoField}
            value={createTodo.task}
            placeholder="Create a new todo..."
            type="text"
            name="task"
          ></InputBox>
        </CreateTodo>
        <TodoBox>
          {Task &&
            Task.map((task) => {
              return (
                <Todo key={task._id}>
                  <TodoDiv>
                  <Checked isClicked={task.isCompleted}>
                    {task.isCompleted && (
                      <CheckedImg src={CheckedIcon}></CheckedImg>
                    )}
                  </Checked>
                  {task.task} 
                  </TodoDiv>
                  
            
                  <ButtonDelete src={CrossIcon}></ButtonDelete>
                </Todo>
              );
            })}

          <TodoDetailBox>
            {Task && <div>{Task.length} items left</div>}
            <div>Clear Completed</div>
          </TodoDetailBox>
        </TodoBox>
        <FilterSection>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </FilterSection>
      </SectionContent>
    </SecondSection>
  );
};

export default Body;
