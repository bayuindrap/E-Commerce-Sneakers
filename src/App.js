import React from "react";
import { Route, Routes } from "react-router";
import NavbarComponent from "./components/NavbarReact";
import NavbarReact from "./components/NavbarReact";
import Navbar from "./components/NavbarReact";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <NavbarComponent/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login-page" element={<LoginPage/>}/>
            <Route path="/register-page" element={<RegisPage/>}/>
            <Route path="/login-page/register-page" element={<RegisPage/>}/>
            <Route path="/register-page/login-page" element={<LoginPage/>}/>
            
          </Routes>
        
      </div>
    );
  }
}
 
export default App;