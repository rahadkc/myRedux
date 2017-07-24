import React from "react";
import {connect} from "react-redux";

import UserList from "./UserList";

import {fetchUsers} from "../actions/userActions";

// @connect((store) => {
// 	return {
// 		users: store.users.users
// 	}
// })

class App extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchUsers());
	}

	render(){
		return (
			<div>
				My App Component
				<UserList users = {this.props.getUsersMethod} />
			</div>
		)
	}
}

  
  const mapDispatchAsProps = (dispatch) => {
    return {
      getUsersMethod: dispatch(fetchUsers)
    }
  };

export default connect(mapDispatchAsProps)(App);


/*
const React, { CreateComponent } from 'react';
const { getUsers } from './actions.js';

class UserComponent extends CreateComponent {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.getUsersMethod();
  }
  
  render() {
    return <Users users={this.props.users}><Users/>
  }
}
  
  const mapStateAsProps = (state) => {
    return {
      users: state.users;
    }
  };
  
    const mapDispatchAsProps = (dispatch) => {
    return {
      getUsersMethod: dispatch(getUsers);
    }
  };

export default connect(mapStateAsProps, mapDispatchAsProps)(UserComponent);*/