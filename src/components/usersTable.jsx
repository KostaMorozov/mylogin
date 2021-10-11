import React from 'react'
import Pagination from './pagination'

class UsersTable extends React.Component {
  render() { 
    const {history, users,pageSize,tableSize,currentPage,onPage,searchedUser,onSearch} = this.props;
    return (
            <React.Fragment>
              <input value={searchedUser} type="text" placeholder="Search User..." onChange={(e)=>onSearch(e.currentTarget.value)}/>
              <button onClick={()=>history.replace("/addUser")} className="btn btn-primary m-2">Add User</button>
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.country}</td>
                </tr>
                ))}
              </tbody>
              <Pagination currentPage={currentPage} onPage={onPage} pageSize={pageSize} tableSize={tableSize}/>
              </table>
            </React.Fragment>
  )
  }
}
 
export default UsersTable;
