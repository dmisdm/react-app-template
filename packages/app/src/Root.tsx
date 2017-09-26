//@flow
import * as React from "react";
import { Helmet } from "react-helmet";
import { ConnectedRouter } from "react-router-redux";
import history from "./_shared/history";
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import { setObservableConfig } from "recompose";
import rxjsconfig from "recompose/rxjsObservableConfig";
const favicon = require("./assets/favicon.ico");
setObservableConfig(rxjsconfig);
import { Providers } from "./Providers";
import { App } from "./App";


const styles = {
  root: {
    height: "100%",
    width: "100%"
  },
  app: {
    height: '100%'
  }
};

export const Root = (props: any) => (
  <Providers>
    <ConnectedRouter history={history}>
      <div style={styles.root} {...props}>
        <Helmet titleTemplate="Who's doing standup ? | %s">
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <App style={styles.app} />
      </div>
    </ConnectedRouter>
  </Providers>
);
