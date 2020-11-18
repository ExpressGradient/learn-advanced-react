# Uncontrolled Components
In uncontrolled components, the form data is handled by the DOM, instead of React.  
Instead of storing the `<input>` value in state and updating it every time, use `ref` for getting the current value. This is an example of uncontrolled components.

### Some stuff about web components
You can directly include web components in JSX. But to access the APIs of those web components, you should be using a `ref` to interact with the DOM node directly.  
Best solution is to write a React component that behaves as a wrapper for your web component.  
Events emitted by a web component may not properly propagate through a React render tree. You will need to manually attach event handlers these events within your React components.