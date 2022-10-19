import React, { useState } from "react";
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

const PrevButton = () => {
  const [index, setIndex] = useState(0);
  const onClick = () => {
    setIndex(() => index - 1);
    if (index === -1) {
    }
  };
  return <button></button>;
};

const NextButton = () => {
  const [index, setIndex] = useState(0);
  const onClick = () => {
    setIndex(() => index + 1);
    if (index === 1) {
    }
  };
  return <button></button>;
};

const SlideWrapper = () => {
  return (
    <WrapperBlock>
      <PrevButton />
      <NewsList />
      <NextButton />
    </WrapperBlock>
  );
};

export default SlideWrapper;
