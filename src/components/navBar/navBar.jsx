import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
	padding: 25px;
	text-align: center;
	background: #FFF1BD;
	color: #293845;
	font-weight: 500;
	font-size: 32px;
	font-family: 'Roboto', sans-serif;
	.logo{
		text-transform: uppercase;
	}
`

const NavBar = () => {
	return (
		<NavBarWrapper className="nav">
			<p className="logo">Todo App</p>
		</NavBarWrapper>
	);
}
 
export default NavBar;