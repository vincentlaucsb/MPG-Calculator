﻿import * as React from "react";
import { DangerButton } from "./Buttons";

export class DeleteConfirm extends React.Component<{ delete: any }, { confirm: boolean }> {
    /*
     * Delete button which changes to a confirm prompt before
     * finally doing the deed
     */
    constructor(props) {
        super(props);

        this.state = {
            confirm: false
        };

        this.delete = this.delete.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    delete() {
        this.props.delete();
        this.setState({ confirm: false });
    }

    toggle() {
        this.setState({ confirm: true });
    }

    render() {
        return this.state.confirm ?
            <DangerButton style={{ float: 'right' }}
                onClick={this.delete}>Confirm</DangerButton> :
            <DangerButton style={{ float: 'right' }}
                onClick={this.toggle}>x</DangerButton>;
    }
}