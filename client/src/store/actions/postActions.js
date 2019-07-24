import axios from 'axios'

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETE_POST_START', id})
        return axios.delete('/api/posts/' + id)
            .then(res => {
                dispatch({type: 'DELETE_POST_SUCCESS'})
                console.log(res)
            })
            .catch(err => {
                dispatch({type: 'DELETE_POST_FAILURE'})
                console.log(err)
            })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        // make async call to database
        dispatch({type: "FETCH_POSTS_START"})
        return axios.get('/api/posts')
            .then(res => {
                dispatch({type: "FETCH_POSTS_SUCCESS", 
                posts: res.data })
            })
            .catch(err => {
                dispatch({type: "FETCH_POSTS_FAILURE", payload: err })
                // make async call to database
            })
    }
}



export const createPost = (post) => {
    return (dispatch) => {
        dispatch({ type: 'CREATE_POST_START'})
        return axios.post('/api/posts', post)
            .then(res => {
                dispatch({type: "CREATE_POST_SUCCESS"})
            })
            .catch((err) => {
                dispatch({type: "CREATE_POST_ERROR"})
                console.log(err)
            })
    }
}