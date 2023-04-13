import React from "react";
import {
  FirstSection,
  FirstSectionImage,
  ThemeIcon,
  Title,
} from "../styledComponents/HeaderStyle";
import BgImagemobile from "../images/bg-mobile-light.jpg";
import IconMoon from "../images/icon-moon.svg";

const Header = () => {
  return (
    <FirstSection>
      <FirstSectionImage src={BgImagemobile}></FirstSectionImage>
      <Title>Todo</Title>
      <ThemeIcon src={IconMoon}></ThemeIcon>
    </FirstSection>
  );
};

export default Header;
