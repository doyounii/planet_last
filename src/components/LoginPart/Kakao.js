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
    position: relative;
  width: 343px;
  height: 48px;
  top: 35px;

  background: #FEE500;
  border-radius: 10px;
  box-sizing: border-box;

  border: 0;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* black */

  color: #000000;
  justify-content: center;
  text-align: center;
`


export default Kakao;