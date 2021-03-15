import React, {Fragment, Component} from 'react';
import {
	Fab,
	Dialog,
	DialogTitle,
	DialogContent,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from '../form/Form';

export default class CreateFormDialog extends Component {

	state = {
		open: false,
	}

	handleClick = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open:false});
		console.log('Closing.');
	};

	render() {
		const {handleSubmit, projectList} = this.props;
		return (
			<Fragment>
				<Fab
					size='small'
					variant='extended'
					color='secondary'
					onClick={this.handleClick}
				>
					<AddIcon />
				</Fab>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby='dialog_form_title'
				>
					<DialogTitle
						aira-label='dialog_form_title'
					>
						New Project
					</DialogTitle>
					<DialogContent>
						<Form 
							handleSubmit={handleSubmit}
							projectList={projectList}
							handleClose={this.handleClose}
						/>
					</DialogContent>
				</Dialog>
			</Fragment>
		);
	}
}