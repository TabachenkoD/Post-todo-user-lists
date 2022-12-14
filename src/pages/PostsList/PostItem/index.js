const PostItem = ({ post }) => {
    return (
        <li>
            <span><b>Title:</b> {post.title}</span>
            <span><b>Post:</b> {post.body}</span>
        </li>
    )
}

export default PostItem;