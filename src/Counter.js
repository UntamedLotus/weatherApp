import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 5,
		};

		this.handleDecrement = this.handleDecrement.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleDecrement() {
		this.setState((c) => {
			return { count: c.count - 1 };
		});
	}

	handleIncrement() {
		this.setState((c) => {
			return { count: c.count + 1 };
		});
	}

	render() {
		const date = new Date("june 21 2027");
		date.setDate(date.getDate() + this.state.count);

		return (
			<div>
				<h2>Hello World</h2>

				<button onClick={this.handleDecrement}>-</button>
				<span>
					{date.toDateString()} [{this.state.count}]
				</span>
				<button onClick={this.handleIncrement}>+</button>
			</div>
		);
	}
}

export default Counter;
