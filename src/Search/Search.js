import {Component} from "react";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ...this.props
        }
        console.log(this.props)
        this.countriesSearch = this.countriesSearch.bind(this)
    }

    countriesSearch (e){

      let result = this.props.data.filter((item)=>{
           return  item.name.toUpperCase().includes(e.target.value.toUpperCase())
        })

        this.setState({
            data:result
        })
    }


    render() {
        return (
            <>
                <div className='search-input'>
                    <label>Search</label>
                    <input  onChange={(e)=>this.countriesSearch(e)} type="text"  name="search" placeholder="Search.."/>
                </div>
                <div className="container">

                    {this.state.data.map((item) => {

                        return (
                            <div  key ={item.id}className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>{item.id}</h2>
                                        <h3>{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>

        )


    }

}

export default Search