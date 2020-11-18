import React from "react";

// Render Prop is a technique for sharing code between React components using a prop whose value is a function.
// React Router, Downshift and Formik use Render Props.
// In this technique, you will be having a prop, which will take a function which should return jsx. You can even call the function with the state.
// The component is like a provider.

export default class RenderProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 23}
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState) => ({ data: prevState.data * 2 }))
    }

    render() {
        return <>
            {this.props.render(this.state)}
            <button onClick={this.increment}>Increment</button>
        </>
    }
}