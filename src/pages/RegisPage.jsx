import React from "react";
import { Card, FormGroup, Label, Input, Button, InputGroup, InputGroupText, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../helper";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";


class RegisPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passShow: <AiOutlineEyeInvisible/>,
            passType: "password",
            toastOpen: false,
            toastHeader: "",
            toastMessage: "",
            toastIcon: "",
            backgroundColor: ""
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

    btRegis = () => {
        if (this.usernameRegis.value == "" || this.emailRegis.value == "" || this.passwordRegis.value == "") {
            // alert("Fill all data first❗")
            // this.setState({
            //     toastOpen: true,
            //     toastHeader: "Register Warning",
            //     toastIcon: "warning",
            //     toastMessage: "Fill all data first❗",
            // })
            Swal.fire(
                'Register Warning',
                `Username, Email or Password Can't be empty`,
                'warning'
              )
        } else {
            axios.post(`${API_URL}/dataUser`, {
                username: this.usernameRegis.value,
                email: this.emailRegis.value,
                password: this.passwordRegis.value,
                role: "user",
                status: "active",
                cart: []
            }).then((res) => {
                // alert(`${this.usernameRegis.value}, Registration Complete✔`)
                this.setState({
                    toastOpen: true,
                    toastHeader: "Register Success",
                    toastIcon: "success",
                    toastMessage: <p>{this.usernameRegis.value}, Registration Complete. <Link to="login-page"><a style={{ color: "#157347" }}>to Login Page</a></Link></p>,
                })
                return <Navigate to="/login-page" />

            }).catch((error) => {
                console.log(error)
            })
        }
    }


    render() {
       
        return (
            <div>
                <div className="p-5">
                    <Toast isOpen={this.state.toastOpen} style={{ position: "fixed", right: 5, top: 145 }}>
                        <ToastHeader icon={this.state.toastIcon} toggle={() => this.setState({ toastOpen: false })}>
                            {this.state.toastHeader}
                        </ToastHeader>
                        <ToastBody>
                            {this.state.toastMessage}
                        </ToastBody>
                    </Toast>
                </div>
               
                <div className="shadow container" style={{ width: "70vw" }}>
                    <div className="row">
                        <div className="col-5 row-3 mt-10" >
                            <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 500, marginTop: 60, marginLeft: 100 }} />
                        </div>
                        <div className="col-6 pl-5" style={{ paddingTop: 80, paddingLeft: 175, marginBottom: 50 }}>

                            <p style={{ fontWeight: "bold", color: "#159953", fontSize: 30, marginLeft: 75 }}>REGISTER </p>
                            <FormGroup style={{ marginTop: -15 }}>
                                <Label for="textUsername">Username</Label>
                                <Input type="text" id="textEmail" placeholder="Input Username"
                                    innerRef={(element) => this.usernameRegis = element}
                                    style={{ width: 300 }} />
                            </FormGroup>
                            <FormGroup style={{ marginTop: -15 }}>
                                <Label for="textEmail">Email</Label>
                                <Input type="text" id="textEmail" placeholder="Input Email"
                                    innerRef={(element) => this.emailRegis = element}
                                    style={{ width: 300 }} />
                            </FormGroup>
                            <FormGroup style={{ marginTop: -15 }}>
                                <Label for="textPassword">Password</Label>
                                <InputGroup style={{ width: 300 }}>
                                    <Input  id="textEmail" placeholder="Input Password"
                                        innerRef={(element) => this.passwordRegis = element} type={this.state.passType}
                                    />
                                    <InputGroupText style={{ cursor: "pointer" }} onClick={this.showPass}>
                                        {this.state.passShow}
                                    </InputGroupText>
                                </InputGroup>
                            </FormGroup>
                            <Button color="success" style={{ color: "white", width: 300, borderRadius: 50, marginTop: 15 }} onClick={this.btRegis}>Create Account</Button>
                            <p className="text-muted" style={{ marginTop: 5, marginLeft: 15 }}>Already Have an Account? <Link to="login-page"><a style={{ color: "#157347" }}>Login here</a></Link></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RegisPage;