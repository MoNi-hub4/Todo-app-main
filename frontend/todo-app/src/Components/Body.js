import React, { useState } from "react";
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
          <Todo>
            <Checked isClicked = {isClicked} onClick={() => setisClicked(!isClicked)}>
              {isClicked && <CheckedImg src={CheckedIcon}></CheckedImg>}
            </Checked>
            Jog around the part 3x
          </Todo>

          <TodoDetailBox>
            <div>5 items left</div>
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
