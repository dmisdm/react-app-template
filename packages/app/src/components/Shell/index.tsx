import * as React from 'react';
import { prependChild } from "_shared/compositionUtils";
import { SnackbarController } from "components/Shell/SnackbarController";
import { compose } from "recompose";
export const Shell = compose(
    prependChild(<SnackbarController />)
)