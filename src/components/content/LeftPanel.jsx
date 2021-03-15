import React, {Fragment} from 'react';
import {
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

export default ({
	classes,
	combinedData,
	selectedProject,
	onEdit,
	onDelete,
	onDetail,
}) => {


	const handleClick = (id) => {
		onDetail(id);
	}
	console.log('combinedData in LP', combinedData);

	return (
		<Paper
			className={classes.paper}
		>
			{
				combinedData.map((item, i) => {
					return (
						selectedProject === '' || item[0] === selectedProject
					?
					<Fragment
						key={'fr' + i}
					>
						<Typography
							key={'ty' + i}
							variant='h5'
						>
							{item[0]}
						</Typography>
						<List
							key={'list' + i}
						>
							{
								item[1].map((item) => {
									return (
											<ListItem
												key={item.id}
												button
												onClick={() => handleClick(item.id)}
											>
												<ListItemText
													key={item.id+'text'}
												>
													{item.title}
												</ListItemText>
												<ListItemSecondaryAction
												>
													<IconButton
														onClick={() => onEdit(item.id)}
														edge='end'
														aria-label='edit'
													>
														<EditOutlinedIcon />
													</IconButton>
													<IconButton
														onClick={() => onDelete(item.id)}
														edge='end'
														aria-label='delete'
													>
														<DeleteIcon />
													</IconButton>
												</ListItemSecondaryAction>
											</ListItem>
										);
									})
								}
							</List>
						</Fragment>
						:
						null
					);
				
				})
			}
		</Paper>
	);
}