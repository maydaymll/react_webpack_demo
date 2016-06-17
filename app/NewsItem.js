import React from 'react';
import './NewsItem.css';
import URL from 'url';

export default class NewsItem extends React.Component {
	render(){
		return (
			<div className="newsItem">
				<div className="newsItem-itemText">
					{this.getTitle()}
				</div>
			</div>
			)
	}
	componentDidUpdate () {
		console.log(222222)
	}

	getDomain() {
		return URL.parse(this.props.item.url).hostname;
	}

	getTitle() {
		return (
			<div className="newsItem_title">
				<a href={this.props.item.url ? this.props.item.url : 'https://news.ycombinator.com/item?id=' + this.props.item.id} className="newsItem_titleLink">
					{this.props.item.title}
				</a>
				{
					this.props.item.url && 
					<span className="newsItem-domain">
						{this.props.rank}
						<a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a>
					</span>
				}
				<TestComponent/>
			</div>
			)
	}
}

var TestComponent = React.createClass({
	componentDidUpdate: function () {
		console.log(3333333)
	},
	render: function () {
		return (
			<div>
				testtesttesttesttesttest
			</div>
		)
	}
})