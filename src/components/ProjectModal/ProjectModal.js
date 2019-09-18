import React from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import { withStyles } from "@material-ui/core/styles";
import projectModalStyle from "assets/jss/material-dashboard-react/components/projectModalStyle.js";

class ProjectModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ isOpen : newProps.modalOpen })
    }

    handleClose() {
        this.props.handleClose();
    }
    
    render() {
        const { classes, children } = this.props;

        return (
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    className={classes.modalBody}
                    open={this.props.modalOpen}
                    onClose={this.handleClose}
                    BackdropComponent={Backdrop}
                >
                  {children}
                </Modal>
        )
    }
}
export default withStyles(projectModalStyle)(ProjectModal);