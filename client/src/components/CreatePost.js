import React from 'react'
import { connect } from 'react-redux'
import { createPost, fetchPosts } from '../store/actions/actions'


class CreatePost extends React.Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault() 
        // make payload to send to createPost action 
        this.props.createPost(this.state)
        this.props.fetchPosts()
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="container">
                <h5>New Post</h5>
                <form onSubmit={this.handleSubmit} className=''>
                    <label htmlFor="title">Topic:</label>
                    <input autoComplete="off" name="title" className="input" type="text" value={this.state.value} onChange={this.handleChange}/>

                    <label htmlFor="body">Body:</label>
                    <input autoComplete="off" name="description" className="materialize-textarea" type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch(createPost(post))
        },
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
}

// null in place of mapStateToProps since we aren't
// using that param
export default connect(null, mapDispatchToProps)(CreatePost)