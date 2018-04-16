import React from 'react';

class Errors extends React.PureComponent {

	render () {
		const { isShown, children } = this.props;

		return isShown
			? <p className="error">{children}</p>
			: null;
	}
}

export default Errors;
