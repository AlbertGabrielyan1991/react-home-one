import {Component} from "react";
import CardItems from "./CardItems";

class CardWrap extends Component{
    constructor() {
        super();
        this.state ={ data: [
                    {
                        "id": 1,
                        "email": "michael.lawson@reqres.in",
                        "first_name": "Michael",
                    },
                    {
                        "id": 2,
                        "email": "lindsay.ferguson@reqres.in",
                        "first_name": "Lindsay",
                    },
                    {
                        "id": 3,
                        "email": "tobias.funke@reqres.in",
                        "first_name": "Tobias",
                        "last_name": "Funke",
                    },
                    {
                        "id": 4,
                        "email": "byron.fields@reqres.in",
                        "first_name": "Byron",

                    },
                    {
                        "id": 5,
                        "email": "george.edwards@reqres.in",
                        "first_name": "George",

                    },
                    {
                        "id": 6,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",

                    },          {
                        "id": 7,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",

                    },          {
                        "id": 8,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",

                    }
                ]}
    }



        render() {
            return(
                <CardItems data={this.state.data} />
            )
        }


}

export  default CardWrap;
