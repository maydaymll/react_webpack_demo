import React from 'react';
import imageLogo from '../image/countdown.png';
import './newsHeader.css';


export default class NewsHeader extends React.Component {
	render() {
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
			);
	}

	getLogo() {
		return(
			<div className="newsHeader_logo">
				<a href="https://github.com/theJian/build-a-hn-front-page">
					<img src= {imageLogo}/>
				</a>
			</div>
			);
	}

	getTitle() {
		return(
			<div className="newsHeader">
				<a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
			</div>
			);
	}

	getNav() {
		var navLinks = [
			{
				name: 'new',
				url: 'newst'
			},
			{
				name: 'comments',
				url: 'newcomments'
			},
			{
				name: 'show',
				url: 'show'
			},
			{
				name: 'ask',
				url: 'ask'
			},
			{
				name: 'jobs',
				url: 'jobs'
			},
			{
				name: 'submit',
				url: 'submit'
			}
		];
		return (
			<div className="newsHeader_nav">
				{
					navLinks.map(function (navLink) {
						return (
							<a href= { "https://news.ycombinator.com/" + navLink.url } key={navLink.url} className="newsHeader-navLink newsHeader-textLink">
								{navLink.name}
							</a>
							)
					})
				}
			</div>
			)
	}


	getLogin() {
	    return ( 
	    	<div className = "newsHeader-login" >
	    		<a className = "newsHeader-textLink" href = "https://news.ycombinator.com/login?goto=news"> login </a> 
	        </div>
	    );
	}

}