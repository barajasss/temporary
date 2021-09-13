import React from "react"

export default function StatusPost({ post }) {
    if (!post) {
        return <></>
    }
    return (
        <div className="status-post">
            {post.type === "text" ? (
                <div class="text-post" style={{ backgroundColor: post.backgroundColor }}>
                    {post.text}
                </div>
            ) : (
                <div class="image-post">
                    <img src={post.imageUrl} alt={post.caption} />
                    <div>{post.imageCaption}</div>
                </div>
            )}
        </div>
    )
}
