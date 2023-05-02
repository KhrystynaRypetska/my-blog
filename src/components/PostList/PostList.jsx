import { useState, useEffect } from "react";

import PostItem from "../PostItem";

function  PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch((error) => console.log(error.message))
    }, [])

    return (
        <>
            <div>
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        </>
    );
}

export default PostList;