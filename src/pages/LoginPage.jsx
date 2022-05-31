import React from "react";
import { Card, FormGroup, Label, Input, Button, InputGroup, InputGroupText, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { loginAction } from "../redux/actions/userAction";
import { API_URL } from "../helper";
import { connect } from 'react-redux';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from 'sweetalert2'



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passShow: <AiOutlineEyeInvisible/>,
            passType: "password",
            toastOpen: false,
            toastHeader: "",
            toastMessage: "",
            toastIcon: "",
            backgroundColor: "",
            dataUser: []
        }
    }

    showPass = () => {
        if (this.state.passType == "password") {
            this.setState({
                passShow: <AiOutlineEye/>,
                passType: "text"
            })
        } else {
            this.setState({
                passShow: <AiOutlineEyeInvisible/>,
                passType: "password"
            })
        }
    }

    // btLogin = async () => {
    //     try {
    //         let res = await this.props.loginAction(this.usernameLogin.value, this.passwordLogin.value)
    //         this.props.loginAction(res.data[0])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(`${API_URL}/dataUser`)
            .then((response) => {
                console.log("GET DATA LOGIN", response.data)
                this.setState({ dataUser: response.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    btLogin = () => {
        if (this.usernameLogin.value == "" || this.passwordLogin.value == "") {
            // alert(`Input your Username & Password❗`)
            // this.setState({
            //     toastOpen: true,
            //     toastHeader: "Login Warning",
            //     toastIcon: "warning",
            //     toastMessage: "Input Username & Password Correctly❗",
            // })
            Swal.fire(
                'Login Failed',
                `Input Username & Password Correctly`,
                'error'
              )
        } else {

            this.props.loginAction(this.usernameLogin.value, this.passwordLogin.value)
        }
    }


    render() {
        
        if (this.props.iduser) {
            // alert(`Welcome ${this.props.username} 👌`)
            Swal.fire(
                'Login Success',
                `Welcome ${this.props.username}`,
                'success'
              )
            return <Navigate to="/"/>
        }
        return (
            <div> 
             <div className="p-5">
                    <Toast isOpen={this.state.toastOpen} style={{ position: "fixed", right: 5, top: 145, backgroundColor: "#f1c40f" }}>
                        <ToastHeader icon={this.state.toastIcon} toggle={() => this.setState({ toastOpen: false })}>
                            {this.state.toastHeader}
                        </ToastHeader>
                        <ToastBody>
                            {this.state.toastMessage}
                        </ToastBody>
                    </Toast>
                </div>
               
                <div className="shadow container" style={{ width: "70vw", height: "65vh" }}>
                    <div className="row">
                        <div className="col-5 row-3 mt-10" >
                            <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 470, marginTop: 60, marginLeft: 100 }} />
                        </div>
                        <div className="col-6 pl-5" style={{ paddingTop: 80, paddingLeft: 170 }}>
                            <p style={{ fontWeight: "bold", color: "#159953", fontSize: 30, marginLeft: 100 }}>LOGIN</p>
                            <FormGroup >
                                <Label for="textUsername">Username</Label>
                                <Input type="text" id="textEmail" placeholder="Input Username"
                                    innerRef={(element) => this.usernameLogin = element}
                                    style={{ width: 300 }} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="textPassword">Password</Label>
                                <InputGroup style={{ width: 300 }}>
                                    <Input id="textEmail" placeholder="Input Password"
                                        innerRef={(element) => this.passwordLogin = element} type={this.state.passType} />
                                    <InputGroupText style={{ cursor: "pointer" }} onClick={this.showPass}>
                                        {this.state.passShow}
                                    </InputGroupText>
                                </InputGroup>
                            </FormGroup>
                            <Button color="success" style={{ color: "white", width: 300, borderRadius: 50, marginTop: 15 }} onClick={this.btLogin}>Login</Button>
                            <p className="text-muted" style={{marginTop: 5,  marginLeft: 15}}>Don't Have an Account? <Link to="register-page"><a style={{ color: "#157347" }}>Sign up here</a></Link></p>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        iduser: state.userReducer.id,
        email:state.userReducer.email,
        username: state.userReducer.username
    }
}


export default  connect (mapToProps, {loginAction})(LoginPage);