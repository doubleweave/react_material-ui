import React, {Fragment, Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {MainData, DetailData} from './components/store';
import Content from './components/content/Content';

export default class App extends Component {

	state = {
		DetailData,
		targetOneData: {},
		selectedProject: '',
		isEdit: false,
	};

	createCombinedData = () => {
		let CombinedObj = MainData.reduce((newObj, item) => {
			newObj = {
				...newObj,
				[item]: [],
			};
			return newObj;
		},{});
		return Object.entries(this.state.DetailData.reduce((newObj, item) => {
			newObj[item.MainData] = [
				...newObj[item.MainData],
				item,
			];
			return newObj;
		}, CombinedObj));
	};

	handleNewDialogSubmit = (obj)=> {
		this.setState((prevState) => {
			return {
				DetailData: [
					...prevState.DetailData,
					obj
				],
			};
		});
	};

	handleShowingDetail = (id) => {
		this.setState((prevState) => ({
			targetOneData: prevState.DetailData.find((item) => (item.id === id)),
			isEdit: false,
		}));
	};

	handleSelectProject = (str) => {
		this.setState({selectedProject: str})
	};

	handleDetailForEditting = (id) => {
		this.setState((prevState) => ({
			targetOneData: prevState.DetailData.find((item) => (item.id === id)),
			isEdit: true,
		}));
	};

	handleDetailAfterEditting = (obj) => {
		console.log('obj in App', obj);
		console.log('obj.id in App', obj.id);
		this.setState((prevState) => ({
			DetailData: [
				...prevState.DetailData.filter((item) => (item.id !== obj.id)),
				obj
			],
		}));
	};

	handleDelete = (id) => {
		this.setState((prevState) => ({
			DetailData: prevState.DetailData.filter((item) => (item.id !== id)),
			targetOneData: {},
		}));
	};

	render() {
		let combinedData = this.createCombinedData();
		console.log('combinedData in App', combinedData);
		return (
			<Fragment>
				<Header 
					handleSubmit={this.handleNewDialogSubmit}
					projectList={MainData}
				/>
				<Content 
					combinedData={combinedData}
					selectedProject={this.state.selectedProject}
					onEdit={this.handleDetailForEditting}
					onDelete={this.handleDelete}
					onDetail={this.handleShowingDetail}
					targetOneData={this.state.targetOneData}
					projectList={MainData}
					isEdit={this.state.isEdit}
					onUpdate={this.handleDetailAfterEditting}
				/>
				<Footer 
					MainData={MainData}
					onSelect={this.handleSelectProject}
					selectedProject={this.state.selectedProject}
				/>
			</Fragment>
		);
	}
}