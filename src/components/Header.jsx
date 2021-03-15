import React, {Component} from 'react';
import {
	AppBar,
	Toolbar,
	Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CreateFormDialog from './dialog/CreateFormDialog';

const userStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
	},
}));

export default ({handleSubmit, projectList}) => {
	const classes = userStyles();

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h5' className={classes.title}>
					Header
				</Typography>
				<CreateFormDialog 
					handleSubmit={handleSubmit}
					projectList={projectList}
				/>
			</Toolbar>
		</AppBar>
	);
}