import React, { FC, useState } from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";

const Root: FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
    </>
  );
};

export default Root;
