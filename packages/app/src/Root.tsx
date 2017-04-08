//@flow
import React from "react";
import { Helmet } from "react-helmet";
import { ConnectedRouter } from "react-router-redux";
import history from "./_shared/history";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import { setObservableConfig } from "recompose";
import rxjsconfig from "recompose/rxjsObservableConfig";
const favicon = require("../public/favicon.ico");
setObservableConfig(rxjsconfig);
import { Providers } from "./Providers";
const styles = {
  root: {
    height: "100%",
    width: "100%"
  }
};

export const Root = (props: any) => (
  <Providers>
    <ConnectedRouter history={history}>
      <div style={styles.root} {...props}>
        <Helmet titleTemplate="Airboard | %s">
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        {props.children}
      </div>
    </ConnectedRouter>
  </Providers>
);
