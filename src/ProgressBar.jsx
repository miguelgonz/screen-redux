import React from 'react';

module.exports = React.createClass({
		render: function () {
				const value = this.props.value | 0;
				const style = {width: value + "%"};

				return <div className="progress">
					<div className="progress-bar" role="progressbar" style={style}>
						<span>{value}%</span>
					</div>
				</div>;
		}
});
