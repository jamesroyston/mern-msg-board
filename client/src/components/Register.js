import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerPayload } from '../store/actions/actions'

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        alert('Registering user.....');
        console.log(this.state)
        this.props.registerPayload(this.state)
        this.props.history.push('/')
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Register below</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerPayload: (creds) => {
            dispatch(registerPayload(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
