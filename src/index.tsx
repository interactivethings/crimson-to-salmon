import { Main } from "./Main";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Country } from "./components/Countries";
import { Station } from "./components/Zurich";

// DANGER ZONE: types may not match
const data: Country[] = require("./data/countries.json");
const detailMonthly: Station[] = require("./data/monthlyValues.json");

ReactDOM.render(
  <Main data={data} detailMonthly={detailMonthly} />,
  document.getElementById("root") as HTMLElement
);
