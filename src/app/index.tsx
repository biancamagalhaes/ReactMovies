import * as React from "react";
import { Route, Switch } from "react-router";
import { hot } from "react-hot-loader";
import Loadable from "react-loadable";
import Loader from "app/components/PageLoader";

const ContainerApp = Loadable({
  loader: () => import("app/container"),
  loading() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader />
      </div>
    );
  }
});

export const App = hot(module)(() => (
  <>
    <Switch>
      <Route path="/" component={ContainerApp} />
    </Switch>
  </>
));
