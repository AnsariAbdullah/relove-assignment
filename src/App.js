import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from './components/footer';
import NavBar from './components/navBar';

const AppWrapper = styled.div`
	overflow: hidden;
	.container{
		width: 1024px;
		padding: 0 50px;
		margin: 0 auto;
		.input-wrapper{
			margin-top: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			.searchbox{
				width: 350px;
				height: 60px;
				padding: 10px;
				font-size: 17px;
			}
			.add-button{
				border: none;
				background: #A3DA8D;
				padding: 15px 40px;
				color: #fff;
				font-size: 22px;
				margin-left: 20px;
    		border-radius: 5px;
			}
		}
		.list-items{
			height: calc(100vh - 245px);
			overflow: auto;
		}
	}
	@media (max-width: 768px) {
		.container{
			width: 100%;
			padding: 0 20px;
		}
	}
	@media (max-width: 425px) {
		.container{
			.input-wrapper{
				.searchbox{
					width: 100%;
				}
				.add-button{
					padding: 5px 40px;
					font-size: 20px;
				}
			}
		}
	}
`

const ListItem = styled.div`
	display: flex;
	justify-content: normal;
	align-items: center;
	border: none;
	padding: 15px 20px;
	border-radius: 2px;
	margin-top: 15px;
	color: #fff;
	background: linear-gradient(to right, #ff5858, #f857a6);
	.close{
		display: inline-block;
    margin-right: 10px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 50%;
    padding: 0 8px 3px;
		cursor: pointer;
	}
	.item{}
`

const Placeholder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: calc(100vh - 450px);
	font-weight: 500;
	font-size: 40px;
`

const App = () => {

	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(()=> {
		console.log(data)
	}, [data])

	const updateSearch = e => {
		setSearchQuery(e.target.value)
	}

	const addToList = () => {
		if(searchQuery.length > 0){
			setData((data) => [
				...data,
				searchQuery,
			])
			setSearchQuery('')
		}
	}

	const deleteItem = (ind) => {
		console.log(ind);
		let arr = [...data];
		if (ind !== -1) {
			arr.splice(ind, 1);
			setData(arr);
		}
	}

	return (
		<AppWrapper>
			<NavBar />

			<div className="container">
				<section className="input-wrapper">
					<input 
						className="searchbox"
						type="text" 
						onChange={updateSearch}
						value={searchQuery}
						placeholder="Add item" 
					/>
					<button className="add-button" onClick={addToList}>Add item</button>
				</section>

				<section className="list-items">
					{ 
						data.length ? data.map((item, index)=> 
							<ListItem key={index}>
								<span className="close" onClick={()=> deleteItem(index)}>x</span>
								<p className="item">{item}</p>
							</ListItem>
						)	: <Placeholder>Welcome to Todo</Placeholder>
					}
				</section>
			</div>

			<Footer />
		</AppWrapper>
	);
}
 
export default App;