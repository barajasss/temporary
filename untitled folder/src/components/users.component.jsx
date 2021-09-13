import React, { useEffect } from "react"
import { fetchUsers } from "../redux/post.actions"
import { useSelector, useDispatch } from "react-redux"
import UserItem from "./user-item.component"

export default function Users() {
    const users = useSelector((state) => state.post.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className="user-container">
            {users.map((username) => {
                return <UserItem username={username} key={username} />
            })}
            {!users.length && <p>No status posted</p>}
        </div>
    )
}
