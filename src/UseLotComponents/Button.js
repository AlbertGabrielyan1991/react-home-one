import React, {Component} from "react";


class Input extends Component {


    render() {
        return (

            <button onClick={this.props.btnFunc} disabled={this.props.disabled}
                    className="button button1">{this.props.description}</button>
        )
    }

}


export default Input