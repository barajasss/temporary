import POST_ACTION_TYPES from "./post.types"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"

const setPosts = (posts) => ({
    type: POST_ACTION_TYPES.SET_POSTS,
    payload: posts,
})
const setUsers = (users) => ({
    type: POST_ACTION_TYPES.SET_USERS,
    payload: users,
})
const setActiveUsername = (activeUsername) => ({
    type: POST_ACTION_TYPES.SET_ACTIVE_USERNAME,
    payload: activeUsername,
})

// asynchronous options

const createPost = (post) => async (dispatch) => {
    const res = await axios.post("/posts", post)
    dispatch(fetchUsers())
}

const fetchPosts = () => async (dispatch, getState) => {
    const activeUsername = getState().post.activeUsername
    const res = await axios.get("/posts/" + activeUsername)
    dispatch(setPosts(res.data.result))
    console.log(res.data.result)
}

const fetchUsers = () => async (dispatch) => {
    const res = await axios.get("/users")
    dispatch(setUsers(res.data.result))
}
const deletePost = (post) => async (dispatch, getState) => {
    const res = await axios.delete("/posts/" + post._id)
    await dispatch(fetchPosts())
    const posts = getState().post.posts
    if (posts.length === 0) {
        dispatch(setActiveUsername(null))
        await dispatch(fetchUsers())
    }
}

export { createPost, fetchPosts, fetchUsers, setActiveUsername, deletePost }
