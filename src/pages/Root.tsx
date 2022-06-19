import React, { FC } from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";

const Root: FC = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Root;
