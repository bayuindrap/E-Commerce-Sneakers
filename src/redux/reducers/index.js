import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";


export const rootReducers = combineReducers ({
    userReducer,
    productReducer,
})

// {
//     // this.props.loading ?
//     //     <Spinner style={{ marginLeft: "auto", marginRight: 10 }}>
//     //         Loading...
//     //     </Spinner>
//     //     :

//         this.props.username ?
//             <UncontrolledDropdown style={{ marginLeft: "auto" }}>
//                 <DropdownToggle caret nav size="sm" outline className="d-flex align-items-center" style={{ color: "#0984e3" }}>
//                     Hello,<b style={{ fontWeight: "bold" }}>{this.props.username}</b>
//                 </DropdownToggle>
//                 {
//                     this.props.role == "user"
//                         ?
//                         <DropdownMenu right>
//                             <Link to="/cart-user" style={{ color: "#2d3436", textDecoration: "none" }}>
//                                 <DropdownItem>
//                                     Cart <span className="badge badge-danger"></span>
//                                 </DropdownItem>
//                             </Link>
//                             <DropdownItem>
//                                 <Link to="/history-user" style={{ color: "#2d3436", textDecoration: "none" }}>
//                                     Transactions History
//                                 </Link>
//                             </DropdownItem>
//                             <DropdownItem>
//                                 <Link to="" style={{ color: "#2d3436", textDecoration: "none" }}>
//                                     Profile
//                                 </Link>
//                             </DropdownItem>
//                             <DropdownItem divider />
//                             <DropdownItem >
//                                 {/* onClick={() => { localStorage.removeItem("data"); this.props.logOutAction() }} */}
//                                 Keluar
//                             </DropdownItem>
//                         </DropdownMenu>
//                         :
//                         <DropdownMenu right >
//                             <DropdownItem>
//                                 <Link to="/product-management" style={{ color: "#2d3436" }} className="nav-link">
//                                     Products Management
//                                 </Link>
//                             </DropdownItem>
//                             <DropdownItem>
//                                 <Link to="/transaction-management" style={{ color: "#2d3436" }} className="nav-link">
//                                     Transactions Management
//                                 </Link>
//                             </DropdownItem>
//                             <DropdownItem divider />
//                             <DropdownItem >
//                                 {/* onClick={() => { localStorage.removeItem("data"); this.props.logOutAction() }} */}
//                                 Keluar
//                             </DropdownItem>
//                         </DropdownMenu>
//                 }

//             </UncontrolledDropdown>
//             :

//             <Link to="/auth-page" style={{ marginLeft: "auto" }}>
//                 <Button type="button" color="success" outline>Masuk dan Daftar</Button>
//             </Link>

// }
