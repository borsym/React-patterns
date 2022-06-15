import React from "react";
import { SplitScreen } from "./SplitScreen";
const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>Left Hand Component {name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return (
    <h1 style={{ backgroundColor: "green" }}>Right Hand Component {message}</h1>
  );
};
const ForTheApp = () => {
  return (
    <>
      <SplitScreen leftWeight={5} rightWeight={1}>
        <LeftHandComponent name="Mate" />
        <RightHandComponent message="Hello" />
      </SplitScreen>
    </>
  );
};

export default ForTheApp;
