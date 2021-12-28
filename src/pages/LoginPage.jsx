import React from "react";
import { Card, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //https://i.postimg.cc/mZSZ9zL0/undraw-Login-re-4vu2-1.png
        //https://i.postimg.cc/ZKtbm455/index.png
        return (
            <div>
                <h1 className="text-center">LOGIN</h1>
                <div className="row">
                    <div className="col-5 row-3 mt-10" >
                        <img src="https://www.kickavenue.com/static/media/register-left.ae5efdee.png" style={{ width: 680, marginTop: 50, marginLeft: 50 }} />
                    </div>
                    <div className="col-6 pl-5" style={{paddingTop: 210, paddingLeft: 100}}>
                        
                            <FormGroup>
                                <Label for="textUsername">Username</Label>
                                <Input type="text" id="textEmail" placeholder="Input Username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="textPassword">Password</Label>
                                <Input type="password" id="textEmail" placeholder="Input Password"
                                />
                            </FormGroup>
                            <Button color="success" style={{color: "white"}}>Login</Button>
                        
                    </div>
                </div>
                <div className="text-center">
                    <p>Don't Have an Account? <Link to="register-page"><a style={{color: "#157347"}}>Sign up here</a></Link></p>
                </div>
            </div>
        );
    }
}

export default LoginPage;