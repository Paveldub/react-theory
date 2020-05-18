import React from 'react';
import Auxilary from '../hoc/auxilary';
import Counter2 from '../counter2/counter2'
import './counter.css'

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            } 
        })
    }

    removeCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        return(
            <Auxilary>
                <h2 key={'1'}>Counter {this.state.counter}</h2>
                <Counter2 />
                <button key={'2'} onClick={this.addCounter}>+</button>
                <button key={'3'} onClick={this.removeCounter}>-</button>
            </Auxilary>
        )
    }
}