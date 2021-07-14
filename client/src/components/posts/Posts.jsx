import Post from '../post/Post'
import './posts.css'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map(p => (
          <Post id={p._id} key={p._id} post={p} />
      ))}
      
    </div>
  )
}
