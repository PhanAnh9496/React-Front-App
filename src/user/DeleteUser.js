import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {isAuthenticated} from '../auth/index';
import {remove} from './apiUser';
import {signout} from '../auth/index';

class DeleteUser extends Component {
    
    state = {
    	redirect: false
    }

    deleteAccount = () => {
    	const token = isAuthenticated().token;
    	const userId = this.props.userId;
    	remove(userId, token)
    		.then(data => {
    			if (data.error) {
    				console.log(data.error);
    			}
    			else {
    				signout(() => console.log("User da xoa tai khoan"));
    				this.setState({redirect: true})
    			}
    		})	;
    }

    deleteConfirmed = () => {
    	let answer = window.confirm("Bạn có muốn chắc chắn xóa tài khoản của mình?");
    	if (answer) {
    		this.deleteAccount()
    	}
    }

    render() {
    	if (this.state.redirect) {
    		return <Redirect to="/" />
    	}
        return (
			<button type="button" onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">
				Delete Profile
			</button>  
        );
    }
}

export default DeleteUser;
