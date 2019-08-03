import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerPayload, loginPayload } from '../store/actions/actions'

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
        this.props.registerPayload(this.state)
        setTimeout(() => this.props.history.push('/'), 1000)
    }
    render() {
        return (
            <div className="columns is-desktop is-centered is-tablet is-mobile is-vcentered" style={{marginTop: 15 + "%"}}>
            <div className="column is-half ">

                <form onSubmit={this.onSubmit} className="box">
                    <h4 className="title is-4">Sign Up For OdinBook</h4>
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
                                Sign Up
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
