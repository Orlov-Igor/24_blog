import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import Comment from "./Comment"

class PostItem extends Component {
  render() {
    const { post, onClick, postId } = this.props;
    return (
      <div className='post-item-wrapper'>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' alt='user-avatar' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary onClick={onClick}>
                <Feed.User><h3>{post.title}</h3></Feed.User> 
              </Feed.Summary>
              <Feed.Extra text>
                {post.body}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
          <Comment postId={postId === post.id ? postId: null}/>
        </Feed>
      </div>
    );
  }
}

export default PostItem;




    
 