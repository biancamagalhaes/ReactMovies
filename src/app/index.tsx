import React from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";
import Loadable from "react-loadable";

const SearchPage = Loadable({
  loader: () => import("app/container/searchPage"),
  loading() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      ></div>
    );
  }
});

const DetailPage = Loadable({
  loader: () => import("app/container/detailPage"),
  loading() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      ></div>
    );
  }
});

export const App = hot(module)(() => (
  <>
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/:movieID" component={DetailPage} />
    </Switch>
  </>
));
