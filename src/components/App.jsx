import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import Navbar from './navbar';
import UsersTable from './usersTable';
import Login from './login';
import Register from './register';
import { getUsers } from './../fakeServices/usersService';
import { paginate } from './paginate';
import AddUser from './addUser';

class App extends Component {
    state = {
        users : getUsers(),
        pageSize : 4,
        currentPage : 1,
        searchedUser:''
    }
    handlePage = (page) => {
        this.setState({currentPage:page})
    }
    handleSearch = (e) =>{
        this.setState({searchedUser:e});
    }
    handleAddUser = (user,history) =>{
        let users = [...this.state.users];
        user.id = 11;
        users.push(user);
        this.setState({users});
        history.replace("/users");
    }
    render() { 
        const {users,pageSize:displayPages,currentPage,searchedUser} = this.state;
        const searchedUsers = users.filter(user =>(
            user.firstName.toLowerCase().startsWith(searchedUser.toLowerCase())
        ))
        const displayUsers = paginate(searchedUsers,currentPage,displayPages);
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar/>
                    <div className="content">
                        <Switch>
                            <Route path="/users" render={(props) => 
                            <UsersTable 
                            {...props}
                            pageSize={displayPages}
                            tableSize={searchedUsers.length}
                            currentPage={currentPage}
                            users={displayUsers}
                            onPage={this.handlePage}
                            searchedUser={searchedUser}
                            onSearch={this.handleSearch}
                            />}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/addUser" render={(props)=><AddUser {...props} onAddUser={this.handleAddUser}/>}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;