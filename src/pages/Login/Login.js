import React from 'react';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <>
        <form className="loginForm">
          <div className="loginLogo">로고</div>
          <div className="loginTitle">로그인</div>
          <input className="inputEmail"></input>
          <input className="inputPassword"></input>
          <div className="askingMissingPassword">
            비밀번호를 잊어버리셨나요?
          </div>
          <div className="askingMembership">계정이 없으신가요? 회원가입</div>
        </form>
      </>
    );
  }
}

export default Login;
