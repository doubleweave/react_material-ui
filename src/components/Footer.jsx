import React from 'react';
import {
	Tabs,
	Tab
} from '@material-ui/core';

export default ({MainData, onSelect, selectedProject}) => {
	const index =  selectedProject === '' ? 0 : MainData.findIndex(item => item === selectedProject) + 1;
	return (
		<Tabs
			value={index}
			style={{position: 'fixed', bottom: '0', width: '100%'}}
			variant='fullWidth'
			aria-label='bottom_footer'
			indicatorColor='primary'
			centered
			onChange={(event, index) => {
				onSelect(index === 0 ? '' : MainData[index - 1]);
			}}
		>
			<Tab key='all' label='All' />
			{
				MainData.map((item, index) => {
					return <Tab key={index} label={item} />
				})
			}
		</Tabs>
	);
}