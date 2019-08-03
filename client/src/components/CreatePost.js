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
            <div className="columns">
                <form onSubmit={this.handleSubmit} className="column is-half">
                <h4 className="title is-4">New Post</h4>

                <div className="field">
                    <label htmlFor="title">Topic:</label>
                    <div className="control">
                    <input autoComplete="off" name="title" className="input is-primary" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    </div>

<div className="field">
                    <label htmlFor="body">Body:</label>
    <div className="control">

                    <input autoComplete="off" name="description" className="textarea is-primary" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="field">
                        <div className="control">
                    <button className="button is-success" type="submit">Submit</button>
    </div>
</div>
                </form>
            </div>
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