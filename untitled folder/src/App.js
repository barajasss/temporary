import "./App.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchPosts } from "./redux/post.actions"

import LeftContainer from "./components/left-container.component"
import RightContainer from "./components/right-container.component"
import Wrapper from "./components/wrapper.component"
import "./main.scss"

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div className="App">
            <Wrapper>
                <LeftContainer />
                <RightContainer />
            </Wrapper>
        </div>
    )
}

export default App
