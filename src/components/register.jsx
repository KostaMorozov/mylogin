import React from 'react'

// export default function Register() {
//     handleRegistration = () =>{
//         this.props.history.replace("/users");
//     }
//     return (
//         <div>
//             <form>
//                 <div class="form-group">
//                     <label for="firstName">First Name</label>
//                     <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
                    
//                 </div>
//                 <div class="form-group">
//                     <label for="lastName">Last Name</label>
//                     <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name"/>
//                 </div>
//                 <div class="form-group">
//                     <label for="email">E-mail</label>
//                     <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
//                 </div>
//                 <div class="form-group">
//                     <label for="phone">Phone</label>
//                     <input type="password" class="form-control" id="phone" placeholder="Enter Phone"/>
//                 </div>
//                 <div class="form-group">
//                     <label for="country">Country</label>
//                     <input type="password" class="form-control" id="country" placeholder="Enter Country"/>
//                 </div>
//                 <button type="submit" onClick={this.handleRegistration} class="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
class Register extends React.Component {
        handleRegistration = () =>{
        this.props.history.replace("/users");
    }
    render() { 
        return (
        <div>
            <form>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
                    
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name"/>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="password" class="form-control" id="phone" placeholder="Enter Phone"/>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <input type="password" class="form-control" id="country" placeholder="Enter Country"/>
                </div>
                <button type="submit" onClick={this.handleRegistration} class="btn btn-primary">Submit</button>
            </form>
        </div>);
    }
}
 
export default Register;