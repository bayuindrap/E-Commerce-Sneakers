import React from "react";
import { Card, FormGroup, Label, Input, Button, InputGroup, InputGroupText, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../helper";

class RegisPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passShow: "show",
            passType: "password",
        }
    }


    showPass = () => {
        if (this.state.passType == "password") {
            this.setState({
                passShow: "hide",
                passType: "text"
            })
        } else {
            this.setState({
                passShow: "show",
                passType: "password"
            })
        }
    }

    btRegis = () => {
        if (this.usernameRegis.value == "" || this.emailRegis.value == "" || this.passwordRegis.value == "") {
            alert("LENGKAPI SEMUA DATA❗")
        } else {
            axios.post(`${API_URL}/dataUser`, {
                username: this.usernameRegis.value,
                email: this.emailRegis.value,
                password: this.passwordRegis.value,
                role: "user",
                status: "active",
                cart: []
            }).then((res) => {
                alert(`${this.usernameRegis.value}, Registrasi Berhasil✔`)
                // <div>
                //     <Alert color="primary">
                //         This is a primary alert with{' '}
                //         <a
                //             className="alert-link"
                //             href="#"
                //         >
                //             an example link
                //         </a>
                //         . Give it a click if you like.
                //     </Alert>
                // </div>

            }).catch((error) => {
                console.log(error)
            })
        }
    }


    render() {
        //https://i.postimg.cc/mZSZ9zL0/undraw-Login-re-4vu2-1.png
        // https://i.postimg.cc/mkSyFtsy/undraw-secure-login-pdn4.png
        return (
            <div>
                <h1 className="text-center" style={{ color: "green" }}>REGISTER</h1>
                <h1 className="text-center" style={{ color: "green" }}>REGISTER</h1>


                <div className="row">
                    <div className="col-5 row-3 mt-10" >
                        <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 680, marginTop: 60, marginLeft: 100 }} />
                    </div>
                    <div className="col-6 pl-5" style={{ paddingTop: 180, paddingLeft: 150 }}>

                        <FormGroup>
                            <Label for="textUsername">Username</Label>
                            <Input type="text" id="textEmail" placeholder="Input Username"
                                innerRef={(element) => this.usernameRegis = element}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="textEmail">Email</Label>
                            <Input type="text" id="textEmail" placeholder="Input Email"
                                innerRef={(element) => this.emailRegis = element}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="textPassword">Password</Label>
                            <InputGroup>
                                <Input type="password" id="textEmail" placeholder="Input Password"
                                    innerRef={(element) => this.passwordRegis = element} type={this.state.passType} />
                                <InputGroupText style={{ cursor: "pointer" }} onClick={this.showPass}>
                                    {this.state.passShow}
                                </InputGroupText>
                            </InputGroup>
                        </FormGroup>
                        <Button color="success" style={{ color: "white" }} onClick={this.btRegis}>Create Account</Button>

                    </div>
                </div>
                <div className="text-center">
                    <p>Already Have an Account? <Link to="login-page"><a style={{ color: "#157347" }}>Login here</a></Link></p>
                </div>
            </div>
        );
    }
}

export default RegisPage;