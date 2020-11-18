import React from "react";

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
// Use React.forwardRef to obtain the ref passed to it, and then forward it to the DOM.
// Ref forwarding is not limited to DOM components. You can forward refs to class components too.
// You can use an arrow function inside forwardRef(), but using a regular named function will be easier to debug in DevTools.
const FancyButton = React.forwardRef(function someForwardRefFunction(props, ref) {
    return <button className="fancy-button" ref={ref}>{props.children}</button>
});

export default class RefForward extends React.Component {
    constructor(props) {
        super(props);
        this.ref = null;
        this.setRef = component => {
            this.ref = component;
        }
    }

    componentDidMount() {
        console.log(this.ref);
    }

    render() {
        return <>
            <p>Ref Forwarding</p>
            <FancyButton ref={this.setRef}>Forwarding</FancyButton>
        </>
    }
}