import React, {Fragment, Component} from 'react';
import {
	FormControl,
	InputLabel,
	TextField,
	Select,
	MenuItem,
	Button,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const userStyles = (theme) => ({
	formClass: {
		width: 300,
	},
	myEmptyRow: {
		marginTop: theme.spacing(2)
	}
});

class Form extends Component {

	state = {
		oneData: {
			title: '',
			detail: '',
			MainData: '',
		},
	};

	handleChange = (name) => (event) => {
		this.setState({
			oneData: {
				...this.state.oneData,
				[name]: event.target.value
			}
		});
	};

	handleSubmit = () => {
		this.props.handleSubmit({
			...this.state.oneData,
			id: this.state.oneData.title.toLocaleLowerCase().replace(/ /g, '-')
		});
		this.props.handleClose();
	};

	handleUpdate = () => {
		this.props.onUpdate(this.state.oneData);
	};

	componentDidMount() {
		if(this.props.targetOneData) {
			this.setState({oneData: this.props.targetOneData});
		}
	}

	render(){
		const {oneData} = this.state;
		const {projectList, isEdit} = this.props;
		console.log('isEdit in Form', isEdit);

		return (
			<Fragment>
				<form className={this.props.formClass}>
					<TextField 
						autoFocus
						fullWidth
						label='Title'
						value={oneData.title || ''}
						onChange={this.handleChange('title')}
					/>
					<TextField 
						fullWidth
						label='Detail'
						value={oneData.detail || ''}
						onChange={this.handleChange('detail')}
					/>
					<FormControl
						fullWidth
						className={this.props.myEmptyRow}
					>
						<InputLabel
							id='select_title'
						>
							New Project
						</InputLabel>
						<Select
							autoWidth
							value={oneData.MainData || ''}
							onChange={this.handleChange('MainData')}
						>
							{
								projectList.map((item) => (
									<MenuItem
										key={item}
										value={item}
									>
										{item}
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
				</form>
				{
					isEdit
					?
					<Button
						variant='contained'
						color='primary'
						onClick={this.handleUpdate}
					>
						Edit
					</Button>
					:
					<Button
						variant='contained'
						color='primary'
						onClick={this.handleSubmit}
					>
						Submit
					</Button>
				}
			</Fragment>
		);
	}
}

export default withStyles(userStyles)(Form);