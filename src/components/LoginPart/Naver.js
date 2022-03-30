import React, { Component } from 'react';
import styled from 'styled-components';
import NaverLogin from 'react-naver-login';

const clientId = " Cloud Platform에서 발급받은 Client ID"

class Naver extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Naver Login
    responseNaver = (res) => {
        console.log(res)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <NaverLogin
                    clientId={clientId}
                    buttonText="Naver"
                    onSuccess={this.responseNaver}
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`


export default Naver;