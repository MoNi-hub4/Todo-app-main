import React from "react";
import {
  CreateTodo,
  InputBox,
  SecondSection,
} from "../styledComponents/BodyStyle";

const Body = () => {
  return (
    <SecondSection>
      <CreateTodo>
        <InputBox></InputBox>
      </CreateTodo>
    </SecondSection>
  );
};

export default Body;
