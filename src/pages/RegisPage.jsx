import React from "react";
import { Card, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../helper";

class RegisPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                cart:[]
            }).then ((res) => {
                alert("REGIS BERHASIL✔")
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
                <h1 className="text-center">REGISTER</h1>
                <div className="row">
                    <div className="col-5 row-3 mt-10" >
                        <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 680, marginTop: 60, marginLeft: 30 }} />
                    </div>
                    <div className="col-6 pl-5" style={{paddingTop: 180, paddingLeft: 100}}>
                        
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
                                <Input type="password" id="textEmail" placeholder="Input Password"
                                innerRef={(element) => this.passwordRegis = element}
                                />
                            </FormGroup>
                            <Button color="success" style={{color: "white"}}>Create Account</Button>
                        
                    </div>
                </div>
                <div className="text-center">
                    <p>Already Have an Account? <Link to="login-page"><a style={{color: "#157347"}}>Login here</a></Link></p>
                </div>
            </div>
        );
    }
}

export default RegisPage;