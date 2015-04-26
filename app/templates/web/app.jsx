import React from "react";
import Router from "react-router";
import routes from "./core/routes.jsx";

Router.run(routes, Router.HistoryLocation, function(Application) {
  React.render(<Application />, document.getElementById("content"));
});

