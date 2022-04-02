import React, { Component } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

const clientId = " Google Cloud Platform에서 발급받은 Client ID"

class Kakao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // KaKao Login
    responseKakao = (res) => {
        console.log(res)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <KaKaoLogin
                    clientId={clientId}
                    buttonText="KaKao"
                    onSuccess={this.responseKakao}
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


export default Kakao;