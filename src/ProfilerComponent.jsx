import React, { Profiler } from "react";

// Profiling measures how often a React application renders and what the cost of rendering is.
// Its purpose is to identify parts of an application that are slow and may benefit from optimizations such as memoization.
// Profiling adds some additional CPU and memory so it is disabled in production.

export default class ProfilerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.incrementCount = this.incrementCount.bind(this);
        this.onRenderCallback = this.onRenderCallback.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

    onRenderCallback(
        id, // the "id" prop of the profiler
        phase, // mounting or updating phase
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // set of interactions belonging to this update
    ) {
        console.log(`Phase: ${phase}, Actual Duration: ${actualDuration}`);
    }

    render() {
        return <Profiler id="profiler" onRender={this.onRenderCallback}>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.incrementCount}>Increment</button>
        </Profiler>
    }
}