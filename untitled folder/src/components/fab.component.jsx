import React, { useState } from "react"
import Modal from "./modal.component"
import { createPost, fetchUsers } from "../redux/post.actions"
import { useDispatch, useSelector } from "react-redux"

const POST_TYPES = {
    TEXT: "text",
    IMAGE: "image",
}

export default function Fab() {
    const [showModal, setShowModal] = useState(false)
    const [postType, setPostType] = useState(POST_TYPES.TEXT)
    const [text, setText] = useState("")
    const [backgroundColor, setBackgroundColor] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [imageCaption, setImageCaption] = useState("")
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()

    const handleCancel = () => {
        setShowModal(false)
    }
    const handlePost = async () => {
        if (!username) return
        if (postType === POST_TYPES.TEXT) {
            if (!text || !backgroundColor) return
        } else {
            if (!imageUrl || !imageCaption) return
        }
        setShowModal(false)
        await dispatch(
            createPost({
                type: postType,
                username,
                text,
                backgroundColor,
                imageUrl,
                imageCaption,
            })
        )
    }

    const openTextForm = () => {
        setPostType(POST_TYPES.TEXT)
        setText("")
        setBackgroundColor("")
        setUsername("")
        setShowModal(true)
    }
    const openImageForm = () => {
        setPostType(POST_TYPES.IMAGE)
        setImageUrl("")
        setImageCaption("")
        setUsername("")
        setShowModal(true)
    }

    return (
        <div className="fab">
            <Modal show={showModal}>
                <div className="title">Create {postType} post</div>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                {postType === "text" ? (
                    <>
                        <input
                            type="text"
                            placeholder="Post Text"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <select
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            value={backgroundColor}
                        >
                            <option value="" disabled>
                                Select Background
                            </option>
                            <option value="lightgreen">Light Green</option>
                            <option value="skyblue">Sky Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="orange">Orange</option>
                        </select>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Image Url"
                            onChange={(e) => setImageUrl(e.target.value)}
                            value={imageUrl}
                        />
                        <input
                            type="text"
                            placeholder="Image Caption"
                            onChange={(e) => setImageCaption(e.target.value)}
                            value={imageCaption}
                        />
                    </>
                )}

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit" onClick={handlePost}>
                        Post
                    </button>
                </div>
            </Modal>

            <span className="material-icons" onClick={openTextForm}>
                create
            </span>
            <span className="material-icons" onClick={openImageForm}>
                image
            </span>
        </div>
    )
}
