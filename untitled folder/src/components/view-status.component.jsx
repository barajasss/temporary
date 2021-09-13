import React, { useEffect, useState } from "react"
import { fetchPosts, setActiveUsername, deletePost } from "../redux/post.actions"
import { useDispatch, useSelector } from "react-redux"
import StatusPost from "./status-post.component"

export default function ViewStatus() {
    const posts = useSelector((state) => state.post.posts)
    const activeUsername = useSelector((state) => state.post.activeUsername)
    const dispatch = useDispatch()
    const [activePostIndex, setActivePostIndex] = useState(0)

    const updateIndex = (index) => {
        if (index < 0) {
            index = posts.length - 1
        } else if (index >= posts.length) {
            index = 0
        }
        setActivePostIndex(index)
    }

    useEffect(() => {
        setActivePostIndex(0)
        dispatch(fetchPosts())
    }, [activeUsername])

    return (
        <div class="view-status">
            <span
                className="close material-icons"
                onClick={() => {
                    dispatch(setActiveUsername(null))
                }}
            >
                close
            </span>
            {posts.length > 1 && (
                <>
                    <span
                        class="material-icons arrow-left"
                        onClick={() => updateIndex(activePostIndex - 1)}
                    >
                        chevron_left
                    </span>

                    <span
                        class="material-icons arrow-right"
                        onClick={() => updateIndex(activePostIndex + 1)}
                    >
                        chevron_right
                    </span>
                </>
            )}
            <span
                class="material-icons delete"
                onClick={() => dispatch(deletePost(posts[activePostIndex]))}
            >
                delete
            </span>

            <div className="post-container">
                {posts.length && <StatusPost post={posts[activePostIndex]} />}
            </div>
        </div>
    )
}
