import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	color: #293845;
	background: #FFF1BD;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px;
	font-family: 'Roboto', sans-serif;
`

const Footer = () => {
	let d = new Date;
	return (
		<FooterWrapper className="footer">
			<p>Copyright {d.getFullYear()}</p>
			<p className="social">Follow us on Instagram</p>
		</FooterWrapper>
	);
}
 
export default Footer;