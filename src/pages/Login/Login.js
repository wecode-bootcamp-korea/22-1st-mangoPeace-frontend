import React from 'react';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <>
        <form className="loginForm">
          <div className="loginLogo">
            <img className="logoImage" alt="logo" src="images/mango.png" />
          </div>
          <div className="loginTitle">로그인</div>
          <input className="inputEmail"></input>
          <input className="inputPassword"></input>
          <button className="submitLoginInfoBtn">로그인</button>
          <div className="askingMissingPassword">
            <div></div>
            비밀번호를 잊어버리셨나요?
          </div>
          <div className="askingMembership">
            계정이 없으신가요? <a className="goToSignUp">회원가입</a>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
