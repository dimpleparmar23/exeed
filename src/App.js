import React, { Component } from 'react'
import Navbar from './Compo/Navbar'
import Home from './Compo/Home'
import Login1 from './Compo/Login1'
// import Jobpost from './Compo/Jobpost'
// import Jobnav from './Compo/Jobnav'
// import Jobs from './Compo/Jobs'
import Cookies from 'js-cookie'
// const baseURL = 'http://localhost:3000'


export default class App extends Component {
  render() {
    const cookieExists = Cookies.get('userID')
    return (
      <div>
        
        {
          cookieExists ? <><Navbar/> 
          <Home/> 
          
          </> :<Login1/>
          
        }
        {/* <Jobnav/>
        <Jobs/> */}
        
        
      </div>
    )
  }
}
