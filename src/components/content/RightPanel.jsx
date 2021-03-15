import React, {Fragment} from 'react';
import {
	Paper,
	Typography,
	Box,
} from '@material-ui/core';
import Form from '../form/Form';

export default ({
	classes,
	projectList,
	targetOneData,
	onUpdate,
	isEdit,
}) => {
	return (
		<Paper
			className={classes.paper}
		>
		{
			JSON.stringify(targetOneData) !== '{}'
				?
					isEdit
						?
							<Form 
								isEdit={isEdit}
								targetOneData={targetOneData}
								projectList={projectList}
								onUpdate={onUpdate}
							/>
						:
							<Fragment>
								<Typography variant='h6'>ID:{targetOneData.id}</Typography>
								<Typography component='div'>
									<Box textAlign='justify'>Title: {targetOneData.title}</Box>
									<Box textAlign='justify'>Detail: {targetOneData.detail}</Box>
									<Box textAlign='justify'>MainData: {targetOneData.MainData}</Box>
								</Typography>
							</Fragment>
				: null		
		}
		</Paper>
	);
}