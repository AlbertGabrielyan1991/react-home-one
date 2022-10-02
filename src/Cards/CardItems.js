import {Component} from "react";
import Card from "./Card";

class CardItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isnone: true,
            ...this.props

        }
        this.toggleCardCountList = this.toggleCardCountList.bind(this)
        this.CardCount = this.CardCount.bind(this)

    }

    toggleCardCountList() {
        this.setState({
            isnone: !this.state.isnone,
        });

    }

    CardCount(id) {
        this.state.data.map((item) => {
            item.count = item.count >= 0 ? item.count : 0
            if (item.id === id) {
                return item.count = item.count + 1

            }
        })
        this.setState({
            data: this.state.data

        })
    }

    render() {

        return (
            <div className="container">
                {this.props.data.map((item) => {
                    return <Card key={item.id} id={item.id} name={item.first_name} CardCount={this.CardCount}/>
                })}
                <button className='openCartLIst' onClick={this.toggleCardCountList}>OPEN</button>

                <ul className={this.state.isnone ? 'close' : 'itemlis'}>

                    {this.state.data.map((item) => {
                        return <li key={item.id}><span>{item.id} id</span>{item.first_name} <span>{item.count}</span>
                        </li>
                    })}
                </ul>
            </div>
        )

    }

}


export default CardItems