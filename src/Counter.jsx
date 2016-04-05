import React from 'react';

module.exports = React.createClass({
	render: function () {
			return <div>
				<span className="label"> {this.props.counter} </span>
				<button onClick={this.props.onClick}>Don't click me</button>
			</div>;
	}
});

