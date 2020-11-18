import React from "react";

// JavaScript error in a part of the UI shouldn't break the whole app.
// Error boundaries are React Components that catch JavaScript errors anywhere in their child component tree and log those errors, and display a fallback UI instead of the component tree crashed.
// Error boundaries catch errors during rendering, in lifecycle methods and in constructors of the whole tree below them.
// Error boundaries do not catch errors for event handlers, async code, SSR and errors thrown in the error boundary itself.

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update the state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Get the error information.
        console.error(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            // Fallback UI.
            return <h1>Something went wrong.</h1>
        }

        return this.props.children;
    }
}

// As of React 16, errors that were not caught by any error boundary will result in the unmounting of the whole React component tree.
// Component Stack Trace: See where exactly in the component tree the error has occurred.
// Use simple try/catch blocks for errors during event handlers and set the error state.