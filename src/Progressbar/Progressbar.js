import React, {Component} from 'react';

const ProgressbarStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: 5,
	width: '100%',
	zIndex: 1000,	
};

const InnerStyleProto = {
	height: '100%',
	background: '#9a0d0d',
	width: 0
};

class Progressbar extends Component {
	constructor () {		
		super(...arguments);
		//console.log('Construct !, percnet=' + this.props.percent);
		this.state = {
			percent: this.props.percent
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({percent: nextProps.percent});
	}
	render() {
		//console.log('Hello');
		//console.log(this.state.percent);
		let InnerStyle = {};
		Object.assign(InnerStyle, InnerStyleProto, {width: this.state.percent + '%'});
		//console.log(InnerStyle);
		return (
			<div style={ProgressbarStyle}>
				<div style={InnerStyle}></div>
			</div>
		);
	}
}

Progressbar.defaultProps = {
	percnet: 0
};

export default Progressbar;