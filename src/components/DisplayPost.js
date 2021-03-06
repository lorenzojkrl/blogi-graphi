import React, { Component } from 'react'
import './DisplayPost.css';

// Graphql
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
// autogenerated graphQL query that retrieves all posts
import { listPosts } from '../graphql/queries'
import { API, graphqlQperation } from 'aws-amplify'

// Components
import BtnInPost from './BtnInPost';

class DisplayPosts extends Component {

  state = {
    postsArray: []
  }

  componentDidMount = async () => {
    this.getPosts()
  }

  getPosts = async () => {
    const allPosts = await API.graphql({ query: queries.listPosts });
    // console.log(`All Posts: `, allPosts.data.listPosts.items);
    this.setState({ postsArray: allPosts.data.listPosts.items })
    // const result = await API.graphql(graphqlQperation(queries.listPosts))
    // console.log("All post", JSON.stringify(result.data.listPosts.items));
    // See more at https://docs.amplify.aws/lib/graphqlapi/query-data/q/platform/js/#using-amplify-graphql-client
  }

  render() {
    const { postsArray } = this.state
    const deleteLabel = "Delete";
    const editLabel = "Edit";

    return (
      <div className="container">
        {postsArray.map(post => (
          <div key={post.id} className="post-container">
            <h2>{post.postTitle}</h2>
            <p>{post.postBody}</p>
            <div className="a-right">
              {/* pass prop name & remove duplication */}
              <BtnInPost btnLabel={editLabel} />
              <BtnInPost btnLabel={deleteLabel} />
            </div>
            <div className="credits">
              Author: {post.postOwnerUsername} <br />
              Published on: {new Date(post.createdAt).toDateString()}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default DisplayPosts