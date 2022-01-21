import React, { useContext } from 'react';
import { UserContext } from '../App';
import ComponentC from './ComponentC';

function ComponentB() {
	const username = useContext(UserContext);
	return (
		<div>
			<h1>{username}</h1>
			<ComponentC />
		</div>
	);
}

export default ComponentB;
