import React, {Component} from 'react';
import MoreInfo from "./MoreInfo";
import classes from "../aboutUs.module.css";


class MoreInfoButton extends Component {
    constructor(props) {
        super(props);
        this.state =
            {isToggleOn:false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn:!prevState.isToggleOn
        }))
    }
    render() {
        return (
            <div className={classes.MoreInfo}>
                <button className={classes.btnstyle} onClick={this.handleClick}>{this.state.isToggleOn ? "hide more info" : "show more info"}</button>
                {this.state.isToggleOn && <MoreInfo/>}
            </div>
        );
    }
}



export default MoreInfoButton;