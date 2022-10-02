import {Component} from "react";


class Card extends Component {
    constructor() {
        super();
        this.state = {
            isnone: true,

        }
    }

    closebox(id) {
        this.setState({
            isnone: false
        })
        this.props.CardCount(id)
    }

    openbox() {
        this.setState({
            isnone: true

        })

    }

    render() {

        // console.log()
        return this.state.isnone ? (

            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>{this.props.id}</h2>
                        <h3>{this.props.name}</h3>
                        <button href="#" onClick={() => this.closebox(this.props.id)}>Read More</button>
                    </div>
                </div>
            </div>


        ) : (<div className="card">
            <div className="box">
                <div className="content">
                    <h2>{this.props.id}</h2>
                    <span onClick={() => this.openbox('1')}>X</span>
                </div>
            </div>
        </div>)
    }
}


export default Card