import React from "react";
import styled from "styled-components";
import NewsList from "./NewsList";
import SlideButton from "./SlideButton";

const WrapperBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 960px;
  margin: 0 auto;
  height: 420px;
  overflow: hidden;
`;

const SlideWrapper = () => {
  return (
    <WrapperBlock>
      <SlideButton />
      <NewsList />
      <SlideButton />
    </WrapperBlock>
  );
};

export default SlideWrapper;
