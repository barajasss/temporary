import React from "react"

export default function Modal(props) {
    if (props.show) {
        return <div className="modal">{props.children}</div>
    }
    return <></>
}
