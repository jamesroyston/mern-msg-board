import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginPayload } from '../store/actions/actions'
import Spinner from 'react-spinner-material'
import { Link, Redirect } from 'react-router-dom'

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
        this.props.loginPayload(this.state)
    }
    render() {
        if (this.props.user.loggedIn) {
            // user.loggedIn can only be true if /api/authenticate responds 200
            return <Redirect to="/home" />
        } else {
            return (
                <div className="columns is-centered" style={{ marginTop: 5 + "%" }}>
                    <div className="column is-two-thirds-tablet is-half-desktop">

                        <form onSubmit={this.onSubmit} className="box">
                            <h4 className="title is-4">Please Login</h4>
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={this.props.user.email !== '' ? this.props.user.email : this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control has-icons-left">

                                    <input
                                        className="input"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
                                        className="button is-success" type="submit" value="Submit">
                                        Login
                                    <Spinner size={16} spinnerColor={"#333"} spinnerWidth={2} visible={this.props.user.loading} />
                                    </button>
                                </div>
                                <div>Don't have an account?<span> </span>
                                    <Link to="/signup" className=" is-success">
                                        Sign Up
                                </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
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
