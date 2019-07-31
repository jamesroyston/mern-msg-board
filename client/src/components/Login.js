import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginPayload } from '../store/actions/actions'

class Login extends Component {

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
        alert('Authentication coming soon!');
        this.props.loginPayload(this.state)
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="container">

                <form onSubmit={this.onSubmit}>
                    <h5>Login Below!</h5>
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
            </div>
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
        loginPayload: (creds) => {
            dispatch(loginPayload(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
