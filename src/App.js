import React from "react";
import { Route, Routes } from "react-router";
import NavbarComponent from "./components/NavbarReact";
import NavbarReact from "./components/NavbarReact";
import Navbar from "./components/NavbarReact";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisPage from "./pages/RegisPage";
import { connect } from "react-redux";
import { loginAction } from "./redux/actions/userAction";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.keeplogin()
  }

  keeplogin = async () => {
    try {
      let local = JSON.parse(localStorage.getItem("data"))
      if (local) {
        let res = await this.props.loginAction(local.username, local.password)

        if (res.success) {
          this.setState({ loading : false })
        }
      } else {
        this.setState({ loading : false })
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent loading={this.state.loading} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register-page" element={<RegisPage />} />
          <Route path="/login-page/register-page" element={<RegisPage />} />
          <Route path="/register-page/login-page" element={<LoginPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/product-detail" element={<ProductDetail />} />

        </Routes>

      </div>
    );
  }
}
const mapToProps = (state) => {
  return {
    role: state.userReducer.role
  }
}


export default connect(mapToProps, { loginAction })(App);