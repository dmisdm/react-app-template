import * as React from 'react';
import { compose, prependChild } from "_shared/compositionUtils";
import { SnackbarController } from "components/Shell/SnackbarController";
export const Shell = compose(
    prependChild(<SnackbarController />)
)