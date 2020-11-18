# Reconciliation
React's "diffing" algorithm.  
React, on every prop change or state update, calls the render function and generates a new virtual DOM.  
Now it needs to figure out how to efficiently update the UI to match the most recent tree.

## The Diffing Algorithm
When diffing two trees, React first compares the two root elements. The behaviour is different depending on the types of the root elements.

### Elements of different types
Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.  
For example, changing from `<a>` to `<img>` will cause teardown.  
When tearing down a tree, old DOM nodes are destroyed.  
Component instances receive `componentWillUnmount()`.  
When building up a new tree, new DOM nodes are inserted into the DOM.  
Component instances receive `componentWillMount()` and then `componentDidMount()`.  
Any state associated with the old tree is lost.  
Any components below the root will also get unmounted and have their state destroyed.

### DOM elements of the same type
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.  

For example,  
```html
<div className="dark-mode"></div>

<div className="light-mode"></div>
```  
React only updates the `className`.  
After handling the DOM node, React then recurses on the children.

### Component elements of the same type
When a component updates, the instance stays the same, so that state is maintained across renders.  
React updates the props of the underlying component instance to match the new element, and calls `componentWillReceiveProps()` and `componentWillUpdate()` on the underlying instance.  
Next, the `render()` method is called and the diff algorithm recurses on the previous result.

### Recursing on children
When recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates whenever there's a difference.  
But this example has worst performance when recursing.  
```html
<ul>
    <li>Duke</li>
    <li>Villanova</li>
</ul>

<ul>
    <li>Connecticut</li>
    <li>Duke</li>
    <li>Villanova</li>
</ul>
```
React will mutate every child instead realizing it can keep the `<li>Duke</li>` and `<li>Villanova</li>` subtrees intact.

### Keys
In order to solve this problem, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in subsequent tree.  
```html
<ul>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
</ul>

<ul>
    <li key="2014">Connecticut</li>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
</ul>
```
Now React knows that the element with a key `2014` is the new one, and the elements with `2015` and `2016` have just moved.  
Keys should be stable, predictable and unique. Don't use unstable keys like `Math.random()`.  
And also don't use index as key.