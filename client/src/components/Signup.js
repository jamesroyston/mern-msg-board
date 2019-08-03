import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerPayload, loginPayload } from '../store/actions/actions'
import Spinner from 'react-spinner-material'

class Register extends Component {

    state = {
        username: '',
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
        this.props.registerPayload(this.state)
        setTimeout(() => this.props.history.push('/login'), 1000)
    }
    render() {
        console.log('signup props: ', this.props)
        return (
            <div className="columns is-centered" style={{ marginTop: 5 + "%" }}>
                <div className="column is-two-thirds-tablet is-half-desktop">

                    <form onSubmit={this.onSubmit} className="box">
                        <h4 className="title is-4">Sign Up For OdinBook</h4>

                        <div className="columns">

                            <div className="field column">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="username"
                                        name="username"
                                        placeholder="Enter username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="columns" style={{marginBottom: 0}}>
                            <div className="field column is-half">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field column is-half">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="field column">
                                <div className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="columns">
                            <div className="field column">
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
                        </div>

                        <div className="field">
                            <div className="control">
                                <button
                                    className="button is-success" type="submit" value="Submit">
                                    Sign Up
                                    <Spinner size={16} spinnerColor={"#333"} spinnerWidth={2} visible={this.props.user.loading}/>
                    </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
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
        registerPayload: (creds) => {
            dispatch(registerPayload(creds))
        },
        loginPayload: (creds) => {
            dispatch(loginPayload(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
