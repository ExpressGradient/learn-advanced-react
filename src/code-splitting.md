# Code Splitting
## Bundling
Bundling is the process of following imported files and merging them into a single file: a "bundle".  
This bundle can be included on a webpage to load an entire app at once.  
Popular bundlers are Webpack, Rollup, Browserify and Parcel.  
The default bundler with create-react-app, next.js and gatsby is webpack.

## Code Splitting
As your app grows, your bundle will grow too. To avoid winding up with a large bundle, start "splitting" your bundle.  
Code Splitting is a feature supported by bundlers which can create multiple bundles that can be dynamically loaded at runtime.  
It can help you "lazy-load" just the things that are currently needed by the user.  

### import()
The best way to introduce code-splitting into your app is through the dynamic `import()` syntax.  

Before:
```javascript
import { add } from "./math";
console.log(add(16, 26));
```

After:
```javascript
import("./math").then(math => console.log(math.add(16, 26)));
```

When webpack comes across this syntax, it automatically starts code-splitting your app.

### React.lazy
React.lazy function lets you render a dynamic import as a regular component.  
It takes in function that must call a dynamic `import()`.  
This must return a `Promise` which resolves to a module with a default export containing a React Component.  
The Lazy component must be rendered inside a `Suspense`. You can wrap multiple components inside a `Suspense`.  
 
```jsx
import { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./otherComponent"));

function MyComponent() {
    return(
        <Suspense fallback={<h1>Loading...</h1>}>
            <OtherComponent />
        </Suspense>
    )
}
```

### Route-based Code Splitting
Split code into bundles for every route, one bundle for one route.