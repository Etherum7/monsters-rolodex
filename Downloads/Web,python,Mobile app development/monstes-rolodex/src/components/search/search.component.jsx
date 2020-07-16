import React from 'react';

import {withStyles} from '@material-ui/core/styles';
const styles = {
	search: {
		WebkitAppearance: 'none',
		border: '#ffg122',
		outline: 'none',
		padding: 10,
		width: 150,
		//lineHeight: 10,
		marginBottom: 10
	}
};
function Search({placeHolder, handleChange, classes}) {
	return (
		<input
			className={classes.search}
			type="search"
			placeholder={placeHolder}
			onChange={handleChange}
		/>
	);
} 
export default withStyles(styles)(Search);
