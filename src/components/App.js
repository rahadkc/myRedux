import React from "react";
import {connect} from "react-redux";

import UserList from "./UserList";

import { fetchUsers } from "../actions/userActions";

class App extends React.Component {
	componentDidMount(){
		this.props.getUsersMethod();
	}

	render(){
    console.log("STATE",this.props.users);
		return (
			<div>
				My App Component
				<UserList users = {this.props.users} />
			</div>
		)
	}
}

  const mapStateAsProps = (state) => {
    return {
      users: state.users.users
    }
  };
  
  const mapDispatchAsProps = (dispatch) => {
    return {
      getUsersMethod() {
        dispatch(fetchUsers());
      }
    }
  };

export default connect(mapStateAsProps,mapDispatchAsProps)(App);
