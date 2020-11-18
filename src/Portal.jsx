import ReactDOM from "react-dom";

// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
// ReactDOM.createPortal(child, container)

export default function PortalComponent(props) {
    return ReactDOM.createPortal(
        props.children,
        document.getElementById("portal")
    );
}

// Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way.
// Context works even though the child is in a portal and outside the DOM tree, as it is still in the React tree.
// An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree.