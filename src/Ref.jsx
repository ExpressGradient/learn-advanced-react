import React from "react";

// Refs provide a way to access DOM nodes or React elements created in the render().
// When to use Refs: Managing focus, text selection, or media playback. Trigerring imperative animations. Integrating with third-party DOM libraries.
// Avoid refs for anything that can be done declaratively.
// You may not use refs on functional components because they don't have any instances.
export default class RefComponent extends React.Component {
    constructor(props) {
        super(props);
        // Use React.createRef to create a ref to React elements.
        this.ref = React.createRef();
        this.classRef = React.createRef();

        // Callback Ref: Instead of using createRef(), the function receives the React component instance or DOM element as its argument, which can be stored and accessed elsewhere. This gives more control over setting and unsetting refs.
        // React will call the ref callback with the DOM element when the component mounts, and call it with null when the component unmounts.
        // If you use ref callback as an inline function, it will get called twice. To get around this define it as a seperate callback bound on the class.
        this.textInput = null;
        this.setTextInput = element => {
            this.textInput = element;
        }
    }

    componentDidMount() {
        // Use current attribute to access the React element/node.
        // Here, you will get the DOM element.
        console.log(this.ref.current.innerText);
        // Here, you will get the mounted instance to the class component,
        console.log(this.classRef.current);
        // Focus the input using textInput onMount.
        this.textInput.focus()
    }

    render() {
        // Attach the ref created by React.createRef and pass it to the element using the ref attribute.
        return <>
            <h1 ref={this.ref}>Ref Component</h1>
            <ChildComponent ref={this.classRef}/>
            <input type="text" ref={this.setTextInput}/>
        </>
    }
}

class ChildComponent extends React.Component {
    render() {
        return <>
            <p>Child1</p>
            <p>Child2</p>
        </>
    }
}

// If you want a child component's DOM node exposed to the parent, use ref forwarding.