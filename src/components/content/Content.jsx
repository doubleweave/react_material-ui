import React from 'react';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const styles = {
	paper: {
		marginTop: 10,
		marginBottom: 10,
		padding: 30,
		height: '100%',
	},
};

function HighOrderComponent ({
	classes,
	selectedProject,
	combinedData,
	onDetail,
	onEdit,
	onDelete,
	targetOneData,
	projectList,
	isEdit,
	onUpdate,
}) {
	console.log('combinedData in Content', combinedData);
	return (
		<Grid container spacing={2}>
			<Grid item sm>
				<LeftPanel
					classes={classes}
					selectedProject={selectedProject}
					combinedData={combinedData}
					onDetail={onDetail}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			</Grid>
			<Grid item sm>
				<RightPanel 
					classes={classes}	
					onUpdate={onUpdate}
					isEdit={isEdit}
					projectList={projectList}
					targetOneData={targetOneData}
				/>
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(HighOrderComponent);