import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  comments: null,
		  loading: false,
		  error: ''
		}
	}
	
	componentDidMount() {
		const { postId } = this.props;
		if (postId) {
		  this.fetchComment(postId)
		}
	  }
	
	componentDidUpdate(prevProps) {
	if (prevProps.postId !== this.props.postId && this.props.postId) {
		this.fetchComment(this.props.postId)
	}
	}

	fetchComment(postId) {
	this.setState({ loading: true });
	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
		.then(response => response.json())
		.then(data => this.setState({ comments: data, loading: false }))
		.then(data => console.log(data))
		.catch(e => this.setState({ error: e.message, loading: false, comments: null }))
	}

	render() {
	const { error, comments, loading } = this.state;
	return (
		<div className='comment-showed'>
		<div className='error'>{error}</div>
		<LoadingOverlay active={loading} />
		{comments && comments.map(comment => 
		<Feed className='comment-item' key={comment.id}>
		<Feed.Event>
			<Feed.Label>
			<img className='comment-image' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' alt = '#'/>
			</Feed.Label>
			<Feed.Content>
			<Feed.Summary>
				<Feed.User>{comment.name}</Feed.User><br />
				<span className='email'>{comment.email}</span>
			</Feed.Summary>
			<Feed.Extra text>
				{comment.body}
			</Feed.Extra>
			</Feed.Content>
		</Feed.Event>
		</Feed>
		)
		}
		</div>
	);
	}



}

export default Comment;