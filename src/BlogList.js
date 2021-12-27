const BlogList = (props) => {
    const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <img src='./whats_new.png' className="post-img"/>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;