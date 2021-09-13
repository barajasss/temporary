import React from "react"
import CreateStatus from "./create-status.component"
import ViewStatus from "./view-status.component"
import { useSelector } from "react-redux"

export default function LeftContainer() {
    const activeUsername = useSelector((state) => state.post.activeUsername)
    return (
        <div className="right-container">{activeUsername ? <ViewStatus /> : <CreateStatus />}</div>
    )
}
