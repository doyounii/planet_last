import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const clientId = " Google Cloud Platform에서 발급받은 Client ID"

class Google extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        console.log(res)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;

    position: relative;
    width: 343px;
    height: 45px;
    top: 21px;
    background: #ffffff;
    /* gray_01 */
  
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    border-radius: 10px;
    border: 0;
  
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
  
    color: #000000;
    justify-content: center;
    text-align: center;
`


export default Google;