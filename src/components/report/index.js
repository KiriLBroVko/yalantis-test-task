import React, { Fragment } from "react";
import MonthlyReport from "./subcomponents/monthlyReport";

const reportOptions = {
  user: <MonthlyReport />,
  default: <MonthlyReport />
};

const Report = ({ type }) => {
  const Component = reportOptions[type]
    ? reportOptions[type]
    : reportOptions.default;

  return <Fragment>{Component}</Fragment>;
};

export default Report;
