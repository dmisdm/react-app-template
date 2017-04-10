//@flow
//This file has been separated out from Root so that we can use just what is required to bridge between angular lang
import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "./_shared/theme";
export const Providers = (props: any) => (
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store} {...props} />
  </MuiThemeProvider>
);
