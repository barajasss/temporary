import React from "react"
import { setActiveUsername } from "../redux/post.actions"
import { useDispatch, useSelector } from "react-redux"

export default function UserItem(props) {
    const dispatch = useDispatch()
    const activeUsername = useSelector((state) => state.post.activeUsername)
    return (
        <div
            className={`user-item ${activeUsername === props.username ? "active" : ""}`}
            onClick={() => dispatch(setActiveUsername(props.username))}
        >
            <div>
                <img
                    src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                    alt="profile"
                />
            </div>
            <h1>{props.username}</h1>
        </div>
    )
}
