import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '../card/card.component';
const styles = {
	cardList: {
		width: '85vw',
		margin: '0 auto',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: 20
	}
};
function CardList(props) {
	const {classes, monsters} = props;
	return (
		<div className={classes.cardList}>
			{monsters.map((monster) => (
				<Card monster={monster} id={monster.id} />
			))}
		</div>
	);
}
export default withStyles(styles)(CardList);
