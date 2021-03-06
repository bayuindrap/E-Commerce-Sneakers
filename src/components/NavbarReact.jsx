import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, NavbarText, DropdownToggle, Spinner } from "reactstrap";
import { logoutAction } from "../redux/actions/userAction";
import { connect } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
          
            <Navbar expand="md" color="dark" fixed="top">
                <NavbarBrand>
                    <Link to="/">
                        <img src="https://i.postimg.cc/ZKtbm455/index.png" alt="logo-brand" width="35px" />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={() => this.setState({ openCollapse: !this.state.openCollapse })} />
                <Collapse isOpen={this.state.openCollapse} navbar>
                    <Nav>
                        <NavItem>
                            <Link className="nav-link" to="/product-page" style={{ color: "#159953" }}>
                                Sneakers
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "White" }}>
                                Street Wear
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "White" }}>
                                Luxury Brands
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "White" }}>
                                Made<a style={{color: "red"}}>In</a>donesia
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {
                        this.props.loading ?
                            <Spinner animation="border" style={{ marginLeft: "auto", marginRight: 10 }}>
                                Loading...
                            </Spinner>
                            :

                            this.props.username ?
                                <UncontrolledDropdown style={{ marginLeft: "auto" }}>
                                    <DropdownToggle caret nav size="sm" className="d-flex align-items-center" style={{ color: "#159953" }}>
                                        Hello, {this.props.username}
                                    </DropdownToggle>
                                    {
                                        this.props.role == "user"
                                            ?

                                            <DropdownMenu right>
                                                <Link to="/cart-page" style={{ color: "#159953", textDecoration: "none" }}>
                                                    <DropdownItem style={{color: "#159953"}}>
                                                       Cart  <AiOutlineShoppingCart/> 
                                                    </DropdownItem>
                                                </Link>
                                                <Link to="transaction-page" style={{ color: "#159953", textDecoration: "none" }}>
                                                    <DropdownItem style={{color: "#159953"}}>
                                                        Transactions <FaMoneyBillAlt/>
                                                    </DropdownItem>
                                                </Link>
                                                <DropdownItem divider/>
                                                <DropdownItem onClick={() => {
                                                    localStorage.removeItem("data");
                                                    this.props.logoutAction();
                                                }} style={{color: "red"}}>
                                                    <FiLogOut/> Logout 
                                                </DropdownItem>
                                            </DropdownMenu>

                                            :

                                            <DropdownMenu right >
                                                <Link to="/product-management" style={{ color: "#159953", textDecoration: "none" }} className="nav-link">
                                                    <DropdownItem style={{color: "#159953"}}>
                                                        Products Management
                                                    </DropdownItem>
                                                </Link>
                                                <Link to="/transaction-admin" style={{ color: "#159953", textDecoration: "none" }} className="nav-link">
                                                    <DropdownItem style={{color: "#159953"}}>
                                                        Transactions Management
                                                    </DropdownItem>
                                                </Link>
                                                <DropdownItem divider />
                                                <DropdownItem onClick={() => {
                                                    localStorage.removeItem("data");
                                                    this.props.logoutAction();
                                                }} style={{color: "red"}}>
                                                    Logout
                                                </DropdownItem>
                                            </DropdownMenu>

                                    }

                                </UncontrolledDropdown>
                                :

                                <Nav style={{ marginLeft: "auto" }}>
                                    <NavItem>
                                        <Link className="nav-link" to="/register-page" style={{ color: "white" }}>
                                            Register
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/login-page" style={{ color: "#159953" }}>
                                            Login
                                        </Link>
                                    </NavItem>
                                </Nav>

                    }

                    {/* 
                    <Link to="/login-page" style={{ marginLeft: "auto" }}>
                        <Button type="button" color="success">Sign In</Button>
                    </Link>
                    <div style={{ float: "right" }}>

                        <Nav >
                            <NavItem>
                                <Link className="nav-link" to="/register-page" style={{ color: "green" }}>
                                    Register
                                </Link>
                            </NavItem>
                        </Nav>
                    </div> */}



                </Collapse>
            </Navbar>
        );
    }
}
const mapToProps = (state) => {
    return {
        username: state.userReducer.username,
        role: state.userReducer.role
    }
}

export default connect(mapToProps, { logoutAction })(NavbarComponent);