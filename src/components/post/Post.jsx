import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
            src="https://cdn-japantimes.com/wp-content/uploads/2020/04/np_file_5860.jpeg"
            alt="" 
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna augue, tempus at rutrum sed, accumsan cursus metus. Suspendisse tempus lectus quis ultrices sagittis. Duis sit amet feugiat elit, quis ultrices velit. Fusce eget risus feugiat, ornare lacus ac, aliquam leo. Aenean a ex ante. Donec non tortor lacus. Praesent condimentum, dui id hendrerit tempus, elit sapien consequat nibh, sit amet molestie libero diam a sapien. Mauris pulvinar id nibh in molestie.
          Pellentesque ornare, odio vel accumsan congue, nisl ipsum dapibus lorem, sit amet cursus quam lorem quis neque. Phasellus iaculis dictum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ligula sem, luctus non luctus nec, consectetur eu leo. Interdum et malesuada fames ac ante
        </p>
    </div>
  )
}
