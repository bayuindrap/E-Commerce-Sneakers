import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, NavbarText, DropdownToggle } from "reactstrap";



class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <Navbar expand="md" color="light">
            //     <NavbarBrand>
            //         <Link to="/">
            //             <img src="https://e7.pngegg.com/pngimages/750/189/png-clipart-white-and-red-air-jordan-1-shoe-illustration-jumpman-air-jordan-drawing-shoe-sneakers-running-shoes-white-outdoor-shoe.png" alt="logo-brand" width="50px" />
            //         </Link>
            //     </NavbarBrand>
            //     <Nav>
            //         <NavItem color="#1B613B">
            //             Sneakers
            //         </NavItem>
            //     </Nav>
            // </Navbar>
            //className="shadow bg-white rounded"
            <Navbar expand="md"color="dark" >
                <NavbarBrand>
                    <Link to="/">
                        <img src="https://i.postimg.cc/ZKtbm455/index.png" alt="logo-brand" width="35px" />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={() => this.setState({ openCollapse: !this.state.openCollapse })} />
                <Collapse isOpen={this.state.openCollapse} navbar>
                    <Nav>
                        <NavItem>
                            <Link className="nav-link" to="/products" style={{ color: "#159953" }}>
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
                                Made In Indonesia
                            </NavLink>
                        </NavItem>
                    </Nav>
                    
                    <Link to="/login-page" style={{ marginLeft: "auto" }}>
                        <Button type="button" color="success">Sign In</Button>
                    </Link>
                    <div style={{ float: "right" }}>

                        <Nav >
                            {/* <NavItem>
                                <Link className="nav-link" to="/Login-Page" style={{ color: "green" }}>
                                    Login
                                </Link>
                            </NavItem> */}
                            <NavItem>
                                <Link className="nav-link" to="/register-page" style={{ color: "green" }}>
                                    Register
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>

                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;