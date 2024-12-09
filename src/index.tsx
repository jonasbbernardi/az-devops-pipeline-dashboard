
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

export function showRootComponent(component: React.ReactElement<any>) {
  ReactDOM.render(<App />, document.getElementById("root"));
}