import React from "react";
import {Route, DefaultRoute} from "react-router";
import IndexRoute from "./index.jsx";
import AppRoute from "../routes/app.jsx";

if (!Object.assign) {
	Object.assign = React.__spread;
}

export default (
	<Route name="index" path="/" handler={IndexRoute}>
		<DefaultRoute name="app" handler={AppRoute} />
	</Route>
);
