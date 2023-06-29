import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && sessionUser &&(
				<li>
					<NavLink to="/taskers">Taskers</NavLink>
				</li>
			)}
			{isLoaded && sessionUser &&(
				<li>
					<NavLink to="/tasks/current">My Tasks</NavLink>
				</li>
			)}
			{isLoaded && sessionUser &&(
				<li>
					<NavLink to="/tasks/new/:taskTypeId">Create a Task</NavLink>
				</li>
			)}
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
