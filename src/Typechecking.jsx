import React from "react";
import PropTypes from "prop-types";

// You can catch a lot of bugs using typechecking, as your app grows.  
// Popular type checking solutions are Flow and TypeScript.  
// React has some built-in typechecking abilities.  
// To run typechecking on props for a component, assign the special propTypes property.

export default class GreetingWithTypechecking extends React.Component {
    render() {
        return <>
            <h3>Greetings {this.props.name}</h3>
            <p>You stood at {this.props.rank} in today's game</p>
        </>
    }
}

GreetingWithTypechecking.propTypes = {
    name: PropTypes.string,
    rank: PropTypes.number
}

// For default values to props. You can declare them as a static field inside the class.
GreetingWithTypechecking.defaultProps = {
    name: "discoding"
}

export class SingleChild extends React.Component {
    render() {
        return <>
            {this.props.children}
        </>
    }
}

SingleChild.propTypes = {
    children: PropTypes.element.isRequired
}

// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
// If you provide an invalid prop, an error will be shown in the console.
// For performance reasons, propTypes is only checked in development mode.
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes see for more validators.