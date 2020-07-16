import React from 'react';

import {withStyles} from '@material-ui/core/styles';
const styles = {
	card: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#95dada',
		border: '1px solid grey',
		borderRadius: 5,
		padding: 25,
		cursor: 'pointer',
		MozOsxFontSmoothing: 'grayscale',
		backfaceVisibility: 'hidden',
		transform: 'translateZ(0)',
		transition: 'transform 0.25s ease-out',
		'&:hover': {
			transform: 'scale(1.05)'
		}
	}
};
function Card(props) {
	const {classes, monster, id} = props;
	return (
		<div className={classes.card}>
			<img
				alt="monster"
				src={`https://robohash.org/${id}?set=set1&size=180x180`}
			/>
			<h1>{monster.name}</h1>
			<h2>{monster.email}</h2>
		</div>
	);
}
export default withStyles(styles)(Card);
