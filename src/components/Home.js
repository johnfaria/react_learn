import React, { Component } from 'react'
// import Rainbow from '../hoc/Rainbow'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

export class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }
  render() {
    const { posts } = this.state

    const postList = posts.length ? (
      posts.map(post => {
        return <div className="post card transparent" key={post.id}>
          <img src={Pokeball} alt=""/>
          <div className="card-content">
            <Link to={'/' + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      })
    ) : (
        <div className="center">No posts yet</div>
      )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
          perferendis doloribus architecto porro quos. Tempora eum quia dolores
          blanditiis incidunt magni neque quas ipsam nesciunt consequuntur, 
          ipsa est in nobis.</p>
        {postList}
      </div>
    )
  }
}

export default Home




