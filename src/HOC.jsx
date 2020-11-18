import React from "react";

// A Higher Order Component(HOC) is an advanced technique in React for reusing component logic. HOCs are not a part of React API, they are a pattern.
// A Higher Order Component is a function that takes a component and returns a new component.
// HOCs are common in third-party React libraries, such as Redux's connect and Relay's createFragmentContainer.
// A HOC doesn't modify the input component, nor does it use inheritance to copy its behaviour. Rather, a HOC composes the original component by wrapping it in a container component.
// A HOC is a pure function with zero side effects.
// The wrapped component receives all the props of the container, along with new prop, data, which it uses to render its output.
// The HOC isn't concerned with how or why the data is used, and the wrapped component isn't with where the data came from.

const programmingLanguages = ["C", "C++", "Rust", "Dart", "JavaScript", "Python"];

function OrderedList(props) {
	return <ol>
		{props.data.map((lang, index) => <li key={index}>{lang}</li>)}
	</ol>
}

function UnorderedList(props) {
	return <ul>
		{props.data.map((lang, index) => <li key={index}>
			<p>Some extra stuff</p>
			<p>{lang}</p>
		</li>)}
	</ul>
}

function withLanguageData(InputComponent, data) {
	// Class name can be anonymous but it'd be easier for debugging in DevTools.
	return class WithLanguageData extends React.Component {
		constructor(props) {
			super(props);
			this.state = {data: data()}
			this.handleChange = this.handleChange.bind(this);
		}

		componentDidMount() {
			console.log("Subscribing to stuff");
		}

		handleChange() {
			this.setState({data: data()});
		}

		render() {
			return <InputComponent data={this.state.data} {...this.props}/>
		}
	}
}

const OrderedListWithData = withLanguageData(OrderedList, () => programmingLanguages);
const UnorderedListWithData = withLanguageData(UnorderedList, () => programmingLanguages);

export default function FinalContainer() {
	return <>
		<OrderedListWithData />
		<UnorderedListWithData />
	</>
}

// Don't mutate the original component. Use composition.
// HOCs should pass through props that are unrelated to its specific concern.

// There are some caveats with HOCs.
// You can't apply HOC to a component within then render method of a component. So use HOC outside a component definition.
// Static methods of the InputComponent must be copied. Use hoistNonReactStatic function from hoist-non-react-statics library for copying static methods of the InputComponent.
// Refs aren't passed through, they are not like props. Use React.forwardRef() for this.
