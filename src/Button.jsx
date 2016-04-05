import React from "react";

module.exports = React.createClass({
		getDefaultProps: function() {
				return {
						type: "primary",
						icon: false
				};
		},
		render: function () {

				const icon = this.props.icon ? "glyphicon glyphicon-"+this.props.icon : '';
				const className = "btn btn-" + this.props.type;
				return <button disabled={this.props.disabled} className={className} onClick={this.props.onClick}>
					<span className={icon}></span>&nbsp;
					{this.props.label}</button>;
		}
});
