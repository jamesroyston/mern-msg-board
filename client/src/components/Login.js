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
        this.props.loginPayload(this.state)
        alert('Logged in!')
        setTimeout(() => this.props.history.push('/'), 1000)
    }
    render() {
        return (
            <div className="columns is-desktop is-tablet is-mobile is-centered is-vcentered" style={{ marginTop: 15 + "%" }}>
                <div className="column is-half ">

                    <form onSubmit={this.onSubmit} className="box">
                        <h4 className="title is-4">Please Login</h4>
                        <div className="field">
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
        loginPayload: (creds) => {
            dispatch(loginPayload(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
