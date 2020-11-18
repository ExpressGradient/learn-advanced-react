import React from "react";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// It is designed to share data that can be considered "global" for a tree of React components, such as current authenticated user, theme or preferred language.
// A component uses the default value when a matching provider isn't there above it in component tree.
const ThemeContext = React.createContext("light");
// React DevTools uses this to determine what to display for this context.
ThemeContext.displayName = "ThemeContext";

// Use provider to pass the current theme to the tree below.
// Any component can read it, no matter how deep it is.
// Passing undefined as a provider value does not cause consuming components to use default value.
// One provider can be connected to many consumers.
// All consumers of a provider will re-render whenever the provider's value prop changes.
export default function RootComponent() {
    return(
        <ThemeContext.Provider value="dark">
            <MidComponent />
        </ThemeContext.Provider>
    );
}

function MidComponent() {
    return(
        <>
            <ChildComponent />
            <OneMoreChildComponent />
        </>
    );
}

class ChildComponent extends React.Component {
    // contextType for reading the current theme context.
    // React will find the closest ThemeProvider above and use it's value.
    static contextType = ThemeContext;

    render() {
        return <h1>This is {this.context} theme.</h1>
    }
}

// Apply context sparingly because it makes component reuse more difficult.
// If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
// However, this isn't the right choice in every case; moving more complexity higher in the tree makes those higher-level components more complicated and forces lower level components to be more flexible than you want.

// Use Context.Consumer for functional components.
// It requires function as a child. This function receives current context value and return a React node.
// The value argument passed to the function will be equal to the value prop of the closest provider for this context above in the tree.
// If there is no provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().
function OneMoreChildComponent() {
    return(
        <ThemeContext.Consumer>
            {value => <h2>This is {value} from functional component</h2>}
        </ThemeContext.Consumer>
    );
}