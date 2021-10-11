import React from 'react'

class AddUser extends React.Component {
    state = {
        user :{
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            country:''
        }
    }
    handleInput = (input,e)=>{
        let user = {...this.state.user};
        user[input] = e;
        this.setState({user});
    }
    // handleAdding = () =>{
    // this.props.history.replace("/users");
    // }

    render() {
        const {user} = this.state;
        const {onAddUser,history} = this.props;
        return (
        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={(e)=>this.handleInput("firstName",e.currentTarget.value)} className="form-control" id="firstName" placeholder="Enter First Name"/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e)=>this.handleInput("lastName",e.currentTarget.value)} className="form-control" id="lastName" placeholder="Enter Last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" onChange={(e)=>this.handleInput("email",e.currentTarget.value)} className="form-control" id="email" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" onChange={(e)=>this.handleInput("phone",e.currentTarget.value)} className="form-control" id="phone" placeholder="Enter Phone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" onChange={(e)=>this.handleInput("country",e.currentTarget.value)} className="form-control" id="country" placeholder="Enter Country"/>
                </div>
                <button type="submit"  onClick={()=> onAddUser(user,history)} className="btn btn-primary">Add User</button>
            </form>
        </div>);
    }
}

export default AddUser;