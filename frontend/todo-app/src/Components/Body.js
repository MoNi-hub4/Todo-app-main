import React, { useState , useEffect } from "react";
import axios from "axios";
import {
  Checked,
  CheckedImg,
  CreateTodo,
  FilterSection,
  InputBox,
  SecondSection,
  SectionContent,
  Todo,
  TodoBox,
  TodoDetailBox,
} from "../styledComponents/BodyStyle";

import CheckedIcon from "../images/icon-check.svg";

const Body = () => {
  const [isClicked, setisClicked] = useState(true);
  const [Task , setTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  } , [])

  // Fetch Data
  const fetchTasks = async () => {
    //Fetch the Todos
    const res = await axios.get("http://localhost:3000/todo")
    //Set to state
    setTask(res.data.todos);
    console.log(res.data.todos)
  }

  return (
    <SecondSection>
      <SectionContent>
        <CreateTodo>
          <InputBox
            placeholder="Create a new todo..."
            type="text"
            name="task"
          ></InputBox>
        </CreateTodo>
        <TodoBox>
          {Task && Task.map((task) => {
            return <Todo key={task._id}><Checked isClicked = {isClicked} onClick={() => setisClicked(!isClicked)}>
            {isClicked && <CheckedImg src={CheckedIcon}></CheckedImg>}
          </Checked>{task.task}</Todo>
          } )}

          

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
