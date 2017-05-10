
import { defaultProps, compose } from "recompose";
import { Snackbar } from "material-ui";
import { connect } from "react-redux";

export const SnackbarController = compose(
    defaultProps({
        message: '',
        open: false
    })
)(Snackbar);