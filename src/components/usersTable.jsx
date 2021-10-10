import React from 'react'
import Pagination from './pagination'

export default function UsersTable({users,pageSize,tableSize,currentPage,onPage,searchedUser,onSearch}) {
    return (
        <div>
          <input value={searchedUser} type="text" placeholder="Search User..." onChange={(e)=>onSearch(e.currentTarget.value)}/>
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
        </div>
    )
}
