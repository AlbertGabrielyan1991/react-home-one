import {Component} from "react";
import Button from "../UseLotComponents/Button";


class Counter extends Component {


    constructor() {
        super();
        this.state = {
            count: 0,
            max: 0,
            min: 0,
            step: 1,
            inputVal: 0,
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)
    }

    min(e) {
        if (!["-", "+"].includes(e.nativeEvent.data)) {
            this.setState({
                min: Number(e.target.value),
                count: Number(e.target.value) > this.state.count ? Number(e.target.value) : this.state.count,
            })
        }

    }

    max(e) {
        if (!["-", "+"].includes(e.nativeEvent.data)) {
            this.setState({
                max: Number(e.target.value),
                count:Number(e.target.value)<this.state.count && this.state.count !== this.state.min?Number(e.target.value):this.state.count    //wonc anem
            })
        }

    }

    step(e){
        this.setState({
          step:Number(e.target.value)
        })

    }

    increase() {
        if (this.state.max < this.state.min && this.state.max) {
            alert('Your maximum cannot be less than your minimum')
        }else {
            this.setState({
                count: (Number(this.state.count) - this.state.step)<this.state.min?this.state.min:Number(this.state.count) - this.state.step
            })
        }

    }

    decrease() {
        console.log((Number(this.state.count) + this.state.step)>this.state.max)
        if (this.state.max < this.state.min && this.state.max) {
            alert('Your maximum cannot be less than your minimum')
        } else {
            this.setState({
                count: (Number(this.state.count) + this.state.step) >this.state.max && this.state.max?this.state.max:(Number(this.state.count) + this.state.step)
            })
        }
    }

    reset() {
        this.setState({
            count: this.state.count = 0,
            min: this.state.min = 0,
            max: this.state.max = 0,

        })
    }


    render() {
        return (
            <>
                <div className="qty mt-5">
                    <Button description='-' disabled={this.state.count === this.state.min ? true : false}
                            btnFunc={this.increase}/>
                    <span className='number'>{this.state.count} </span>
                    <Button description='+'
                            disabled={(this.state.count === this.state.max) && (this.state.max !== 0) ? true : false}
                            btnFunc={this.decrease}/>

                </div>
                <div className='reset-button-content'>
                    <div className='input-box'>
                        <label>min</label>
                        <input type="number" className="start-count" min={this.state.min === 0 ? 0 : this.state.min}
                               onChange={(e) => this.min(e)} value={this.state.min <= 0 ? 0 : this.state.min}/>
                    </div>
                    <div className='input-box'>
                        <label>max</label>
                        <input type="number" className="start-count" min={this.state.min === 0 ? 0 : this.state.min}
                               onChange={(e) => this.max(e)} value={this.state.max <= 0 ? 0 : this.state.max}/>
                    </div>
                    <div className='input-box'>
                        <label>step</label>
                        <input type="number" className="start-count" onChange={(e) => this.step(e)} />
                    </div>
                </div>
                <div className='reset-button-content'>
                    <button onClick={this.reset} className="button button1">Reset</button>
                </div>

            </>
        )
    }

}


export default Counter