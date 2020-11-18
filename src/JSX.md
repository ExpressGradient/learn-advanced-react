# JSX
JSX just provides syntactic sugar for the `React.createElement(component, props, ...children)`;  

It turns JSX
```jsx
<Greeting message={"Hello"} />
```  

into this
```js
React.createElement(
    Greeting,
    {message: "Hello"}
);
```  
This is all done by the Babel compiler.

## Specifying the React element type.
Capitalized tags indicate that it is a React Component.

## Choosing the type at runtime.
You cannot use a general expression as the React element type.

## Props in JSX
1. JS expressions
2. Strings
3. Props that default to true.
4. Spread attributes.

## JSX children
1. Strings
2. JSX children
3. JS expressions
4. Functions

Booleans, Null, and Undefined are ignored.
