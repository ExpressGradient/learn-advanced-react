import React from "react";
// Web accessibility(a11y) is the design and creation of websites that can be used by everyone.
// WAI-ARIA: Web Accessibility Initiative - Accessible Rich Internet Applications is a document that contains techniques for building fully accessible JavaScript widgets.
// All aria-* HTML elements are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, but these attributes should be hyphen-cased as they are plain HTML.
// Accessible Forms: Every HTML form control like <input> and <textarea>, needs to be labeled accessibly.
export default class Accessibility extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<label htmlFor="accessible-input">
				Accessible Input
				<input type="text" aria-label="Accessible Input" aria-required="true" value={this.state.value} onChange={this.handleChange} id="accessible-input"/>
			</label>
		);
	}
}

// Semantic HTML: Using various HTML elements to enforce the meaning of information in our websites will often give us accessibility for free.
// Use React.Fragment or <></> to group multiple elements.
// Use <></> if you don't need any props on the fragment tag.
function TodoItem(props) {
	return(<React.Fragment>
		<dt>{props.todo.title}</dt>
		<dd>{props.todo.description}</dd>
	</React.Fragment>);
}

export function Todos(props) {
	const todos = [
		{
			title: "title1",
			description: "description1"
		},
		{
			title: "title2",
			description: "description2"
		}
	];

	return(
		<dl>
			{todos.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
		</dl>
	);
}

// Use focus() on the ref to programmatically manage focus for focus control.
// Ensure that all functionality exposed through a mouse or a pointer event can also be accessed using the keyboard alone.
// Set lang, title, and color contrast.
// Use eslint-plugin-jsx-a11y plugin for eslint in JSX for feedback regarding accessibility issues.
// Use screen readers to test your application's accessibility.
