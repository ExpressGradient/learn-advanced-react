# Use Production Build.

# Profile Components with the Chrome Performance tab.
In the development mode, you can visualize how components mount and unmount, using the performance tools in supported browsers.

# Profiling Components with the DevTools Profiler.

# Virtualize long lists.
"windowing": If your applications renders long lists of data, windowing renders a small subset of your rows at any given time. This can reduce the time it takes to render the components as well as the number of DOM nodes created.  
You can use `react-window` or `react-virtualized` libraries for this purpose.

# Avoid Reconcilation.
React builds and maintains virtual DOM(internal representation of the rendered UI). This representation lets React avoid creating DOM nodes and accessing existing ones beyond necessity, as that can be slower than operations on JS objects.

When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

This re-rendering takes some time. Mostly it is alright, but if the slowdown is noticable, override the lifecycle function `shouldComponentUpdate(nextProps, nextState)`. This function is triggered before the re-rendering process starts. It should return a boolean, if it returns true(default), then the component can update, or else, skip the rendering process, including calling render() on this component and below.