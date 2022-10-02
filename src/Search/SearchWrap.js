import {Component} from "react";
import Search from "./Search";

class SearchWrap extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {"id": 1, "name": "USA"},
                {"id": 2, "name": "Japan"},
                {"id": 3, "name": "USA"},
                {"id": 5, "name": "Paraguay"},
                {"id": 6, "name": "Germany"},
                {"id": 7, "name": "Yemen"},
                {"id": 8, "name": "Uruguay"},
                {"id": 9, "name": "Romania"},
                {"id": 10, "name": "Somalia"},
                {"id": 11, "name": "Zambia"},
                {"id": 12, "name": "Togo"},
            ]
        }

    }


    render() {
        return (
            <Search data={this.state.data}/>
        )
    }


}

export default SearchWrap;
