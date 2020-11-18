import React from "react";

export default class ShouldComponentUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.incrementCount = this.incrementCount.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count < nextState.count) {
            return true;
        }

        return false;
    }

    incrementCount() {
        this.setState((state) => ({count: state.count + 1}));
    }

    render() {
        return <>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment</button>
        </>
    }
}