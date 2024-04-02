import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
// import Signin from './Signin';
export default class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    Cookies.set("jack@gmail.com","jack884")
    

    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      // console.log(response.data); // Handle successful login response
      console.log(response.data)
      if(response.data.status === 200){
        Cookies.set("userID",response.data.data)
        Cookies.set("auofuiaeu","ruoursoi")
      }

    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  }

  render() {
    return (
      <div id="logincard" className="loginCard">
        <h1>Login</h1>
        <div id="inputs" className="inputs">
          <input
            placeholder="Enter your Email"
            className="emailInput"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Enter your Password"
            className="passwordInput"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="buttons">
          <button className="login" onClick={this.handleLogin}>Login</button>
          <li className="nav-item">
        <Link to="Signin" className="nav-link" >Signin</Link>
      </li>
        </div>
      </div>
    );
  }
}
